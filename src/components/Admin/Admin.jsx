"use client";

import { useEffect, useState } from "react";
import { getfetchContacts } from "@/app/actions/contactForm";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteContacts } from "@/app/actions/contactForm/queries";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const [contactsData, setContactsData] = useState();
  const [selectedContact, setSelectedContact] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getfetchContacts();
        setContactsData(data);
        console.log(data, "data");
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
      }
    };

    fetchData();
  }, []);
  const requestDelete = (id) => {
    setContactToDelete(id);
    setConfirmOpen(true);
  };

  const handleDelete = async () => {

      

    try {
      await DeleteContacts(contactToDelete); // your API call
      const updatedData = await getfetchContacts();
      setContactsData(updatedData);
      setDialogOpen(false); // close contact details dialog
      toast.success("Contact deleted successfully!");

    } catch (error) {
      console.error("Failed to delete contact:", error);
    } finally {
      setConfirmOpen(false); // close confirm dialog
    }
  };

  if (!contactsData) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          <Skeleton className="h-10 w-64" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow animate-pulse"
            >
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-48 mb-2" />
              <Skeleton className="h-4 w-36 mb-2" />
              <Skeleton className="h-16 w-full mb-2" />
              <Skeleton className="h-3 w-24 mt-3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="my-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Contact Messages
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactsData.contacts.length === 0 && (
          <p className="col-span-full text-gray-500 text-center">
            No messages found.
          </p>
        )}

        {contactsData?.contacts.map((c) => (
          <div
            key={c._id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => {
              setSelectedContact(c);
              setDialogOpen(true);
            }}
          >
            <p className="text-gray-800 font-semibold mb-1">{c.fullName}</p>
            <p className="text-gray-600 mb-1">{c.emailAddress}</p>
            {c.company && (
              <p className="text-gray-600 mb-1">Company: {c.company}</p>
            )}
            <p className="text-gray-700 mt-2">{c.message.slice(0, 50)}...</p>
            <p className="text-xs text-gray-400 mt-3">
              {new Date(c.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Dialog for full contact details */}
      {selectedContact && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader className="flex justify-between items-start">
              <DialogTitle>{selectedContact.fullName}</DialogTitle>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => requestDelete(selectedContact._id)}
              >
                Delete
              </Button>
            </DialogHeader>
            <DialogDescription asChild className="space-y-2 mt-4">
              <div>
                <div>
                  <strong>Email:</strong> {selectedContact.emailAddress}
                </div>
                {selectedContact.company && (
                  <div>
                    <strong>Company:</strong> {selectedContact.company}
                  </div>
                )}
                {selectedContact.phoneNumber && (
                  <div>
                    <strong>Phone:</strong> {selectedContact.phoneNumber}
                  </div>
                )}
                {selectedContact.skype && (
                  <div>
                    <strong>Skype:</strong> {selectedContact.skype}
                  </div>
                )}
                <div>
                  <strong>Message:</strong> {selectedContact.message}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  {new Date(selectedContact.createdAt).toLocaleString()}
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}

      {/* Confirm Delete Dialog */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this contact? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
