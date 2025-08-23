"use server";
import { connectToDB } from "@/lib/db";
import Contact from "@/lib/models/contact.model";
import nodemailer from "nodemailer";

const serializeDoc = (doc) => {
  return {
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString(),
  };
};

// 🔹 Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true if using port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

    // ✅ Send email with proper format
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `📩 New Contact Form Submission from ${formData.fullName}`,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f9;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background: linear-gradient(90deg, #f97316, #dc2626); padding: 16px; color: white; text-align: center;">
        <h2 style="margin: 0;">New Contact Form Submission</h2>
      </div>

      <!-- Body -->
      <div style="padding: 24px; color: #333;">
        <p style="font-size: 16px;">Hello Admin,</p>
        <p style="font-size: 15px;">You’ve received a new contact form submission. Here are the details:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Full Name</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Email</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.emailAddress}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Company</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.company}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Phone Number</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Skype</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.skype}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Message</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.message}</td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="background: #f9fafb; padding: 12px; text-align: center; font-size: 13px; color: #6b7280;">
        <p style="margin: 0;">This email was generated automatically from your website’s contact form.</p>
      </div>
    </div>
  </div>
  `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info," Email sent info");

    return {
      success: true,
      message: "Contact created successfully & email sent ✅",
      contact: savedContactData,
    };
  } catch (error) {
    console.log(error);
    return { error: "Internal Server Error." };
  }
};
