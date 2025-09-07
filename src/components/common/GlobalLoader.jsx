"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useLoadingStore from "@/lib/store/loadingStore";
import Loader from "./Loader";

export default function GlobalLoader({ children }) {
  const pathname = usePathname();
  const [isAutoLoading, setIsAutoLoading] = useState(false); // Use useState instead of useEffect
  const { loading, startLoading, stopLoading } = useLoadingStore();
    
  useEffect(() => {
    // Start loader when route changes
    setIsAutoLoading(true);
    startLoading(); // Start loading from the store

    // Stop loader after a short delay (simulate loading until render settles)
    const timer = setTimeout(() => {
      setIsAutoLoading(false);
      stopLoading(); // Stop loading from the store
    }, 2000); // Adjust time as needed

    return () => {
      clearTimeout(timer);
      stopLoading(); // Ensure loading stops when the component unmounts
    };
  }, [pathname, startLoading, stopLoading]);

  return (
    <>
      {(loading) && <Loader />}
      {children}
    </>
  );
}
