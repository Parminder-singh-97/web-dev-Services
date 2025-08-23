import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    emailAddress: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    company: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
    },
    skype: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);


const Contact =
  mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);

export default Contact;