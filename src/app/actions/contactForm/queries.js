"use server";
import { connectToDB } from "@/lib/db";
import Contact from "@/lib/models/contact.model";

const serializeDoc = (doc) => {
  return {
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString(),
  };
};

export const ContactForm = async (formData) => {
  try {
    console.log(formData, "form data in query");
    await connectToDB();

    if (!formData) {
      return { error: "Error while creating Data in server" };
    }

    const ContactData = await Contact.create({
      fullName: formData?.fullName,
      emailAddress: formData?.emailAddress,
      company: formData?.company,
      phoneNumber: formData?.phoneNumber,
      skype: formData?.skype,
      message: formData?.message,
    });

    if (!ContactData) {
      return { error: "Error while creating Data" };
    }

    // ✅ Convert Mongoose doc → plain serializable object
    const savedContactData = serializeDoc(ContactData.toObject());

    return {
      success: true,
      message: "Contact created successfully",
      contact: savedContactData,
    };
  } catch (error) {
    console.log(error);
    return { error: "Internal Server Error." };
  }
};
