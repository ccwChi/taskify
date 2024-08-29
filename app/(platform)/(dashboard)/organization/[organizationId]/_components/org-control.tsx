"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const OrgControl = () => {
  const param = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({ organization: param.OrganizationId as string });
  }, [setActive, param.OrganizationId]);

  return null;
};

export default OrgControl;