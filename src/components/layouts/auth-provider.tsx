"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import NavBar from "./navbar";

const AuthProviderComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system" disableTransitionOnChange themes={["light", "dark"]}>
      <NavBar />
      {children}
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(AuthProviderComponent), { ssr: false });