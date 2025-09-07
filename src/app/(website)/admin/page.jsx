import AdminDashboard from "@/components/Admin/Admin";
import AdminLayout from "./layout";
import { getfetchContacts } from "@/app/actions/contactForm";

export default async function page() {
  return (
    <>
      <AdminDashboard />
    </>
  );
}
