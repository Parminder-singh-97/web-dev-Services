"use server";
import { ContactForm, fetchContacts } from "./queries";

export const SetContactForm = async (formData) => {
  const contactFormData = await ContactForm(formData);

  return contactFormData;
};
export const getfetchContacts = async () => {
  const contactFormData = await fetchContacts();

  return contactFormData;
};
export const DeleteContacts = async (contactId) => {
  const contactFormData = await DeleteContacts(contactId);

  return contactFormData;
};
