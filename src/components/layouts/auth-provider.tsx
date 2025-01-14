"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import NavBar from "./navbar";
import { useRouter, usePathname } from "next/navigation";

const AuthProviderComponent = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isAuthenticated = false;

  // useEffect(() => {
  //   if (pathname === "/" && !isAuthenticated) {
  //     router.push("/signup");
  //   } else {
  //     setLoading(false);
  //   }
  // }, [pathname, isAuthenticated]);

  // if (loading) {
  //   return null;
  // }

  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system" disableTransitionOnChange themes={["light", "dark"]}>
      <NavBar />
      {children}
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(AuthProviderComponent), { ssr: false });