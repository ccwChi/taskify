import { OrganizationProfile } from "@clerk/nextjs";
import React from "react";

const SettingPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: { boxShadow: "none", widows: "100%" },
            card: { border: "1px solid #e5e5e5", width: "100%" },
          },
        }}
      />
    </div>
  );
};

export default SettingPage;
