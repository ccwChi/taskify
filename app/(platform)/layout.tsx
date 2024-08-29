import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const PlatFormLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider afterSignOutUrl="/">{children}</ClerkProvider>;
};

export default PlatFormLayout;
