
"use server";

import { CreateUser, VerifyUser } from "./queries";

export const getVerifyUser = async (formData) => {

    const data = await VerifyUser(formData);

    return data;



}
export const createNewUser = async (formData) => {

    const data = await CreateUser(formData);

    return data;



}


