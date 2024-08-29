import { UserButton, useAuth } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

const ProtectedPage = async () => {
  return (
    <div>
      <UserButton  />
    </div>
  );
};

export default ProtectedPage;
