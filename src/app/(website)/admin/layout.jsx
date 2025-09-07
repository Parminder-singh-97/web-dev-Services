import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-6 font-bold text-xl border-b border-blue-500">
          SP Dev Solutions
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <Link href="/admin" className="block px-4 py-2 rounded hover:bg-blue-500">
            Dashboard
          </Link>
          <Link href="/admin/contacts" className="block px-4 py-2 rounded hover:bg-blue-500">
            Contacts
          </Link>
          <Link href="/admin/settings" className="block px-4 py-2 rounded hover:bg-blue-500">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
