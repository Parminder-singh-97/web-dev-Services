"use server"
import { ContactForm } from "./queries"

export const SetContactForm =  async (formData) => {

const contactFormData = await ContactForm(formData)

return contactFormData
 
}