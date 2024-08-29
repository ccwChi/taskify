"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";


async function deleteBoard(id: string) {
  await db.board.delete({ where: { id } });

  revalidatePath("/organization/org_2kzNsZoW4jMJ0pH0S9ZBlV64yTI");
}

export { deleteBoard };
