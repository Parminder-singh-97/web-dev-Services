"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';

const Client_header = () => {
      const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <>
    <section
      className="banner-inner py-20 text-white bg-black relative opacity-90 bg-cover bg-center"
      id="Home"
      style={{
        backgroundImage: ` url('https://images.unsplash.com/photo-1550622824-c11e494a4b65?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Page Title */}
      <div className="textblock text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold capitalize">Our Clients</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-wrap  py-3 shadow-lg mt-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            {/* Home Link */}
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-red-600 transition"
              >
                <FaHome />
                Home
              </Link>
            </li>

            {/* Dynamic breadcrumb */}
            {pathnames.map((name, index) => {
              const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;
              return (
                <li key={name} className="flex items-center gap-2">
                  <span className="text-gray-400">/</span>
                  {isLast ? (
                    <span className="capitalize text-orange-600 font-semibold">
                      {name.replace(/-/g, " ")}
                    </span>
                  ) : (
                    <Link
                      href={routeTo}
                      className="capitalize hover:text-blue-600 transition"
                    >
                      {name.replace(/-/g, " ")}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Client_header
