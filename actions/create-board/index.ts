"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";
import { InputType, ReturnType } from "./types";
import { auth } from "@clerk/nextjs/server";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title } = data;
  let board;
  try {
    board = await db.board.create({ data: { title } });
  } catch (err) {
    return {
      error: "Failed to create",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler); 

// export type State = {
//   errors?: {
//     title?: string[];
//   };
//   message?: string | null;
// };

// const CreateBoard = z.object({
//   title: z
//     .string()
//     .min(3, { message: "minimun length of 3 letters is required" }),
// });

// async function create(prevState: State, formData: FormData) {
//   const validatedFields = CreateBoard.safeParse({
//     title: formData.get("title"),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing fields",
//     };
//   }

//   const { title } = validatedFields.data;

//   try {
//     await db.board.create({ data: { title } });
//   } catch (err) {
//     return {
//       message: "Database Error",
//     };
//   }
//   revalidatePath("/organization/org_2kzNsZoW4jMJ0pH0S9ZBlV64yTI");
//   redirect("/organization/org_2kzNsZoW4jMJ0pH0S9ZBlV64yTI");
// }

// export { create };
