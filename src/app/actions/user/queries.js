"use server";

import AdminUser from "@/lib/models/AdminUser.model";
import { connectToDB } from "@/lib/db"; // ✅ use ES import instead of require
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const JWT_SECRET = process.env.JWT_SECRET || "google"; // keep in .env

const serializeDoc = (doc) => {
  return {
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString(),
  };
};
// 🔹 Verify user

export async function VerifyUser(formData) {
  try {
    await connectToDB();
    const { email, password } = formData;

    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }

    const existingUser = await AdminUser.findOne({ email });
    if (!existingUser) {
      return { success: false, message: "Invalid credentials" };
    }

    // TODO: use bcrypt later for real password check
    if (existingUser.password !== password) {
      return { success: false, message: "Invalid credentials" };
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

   const cookieStore = await cookies();
cookieStore.set("accessToken", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60, 
});
    const serializedUser = serializeDoc(existingUser);

    return {
      success: true,
      user: serializedUser.email,
      message: "Signed in successfully",
    };
  } catch (error) {
    console.error("VerifyUser error:", error);
    return {
      success: false,
      user: [],
      message: "Internal error: Failed to verify user",
    };
  }
}

// 🔹 Create user
export async function CreateUser(formData) {
  try {
    await connectToDB();
    const { email, password } = formData;

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    const existingUser = await AdminUser.findOne({ email });
    console.log(existingUser, "existingUserincreate");
    if (existingUser) {
      return { error: "User already exists" };
    }

    const newUser = await AdminUser.create({ email, password });

    const newCreatedUser = serializeDoc(newUser);

    return {
      success: true,
      user: newCreatedUser,
      message: "User created successfully",
    };
  } catch (error) {
    console.error("CreateUser error:", error);
    return { success: false, user: [], message: "Failed to create user" };
  }
}
