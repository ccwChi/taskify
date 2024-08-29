import { z } from "zod";

const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Title is require",
      invalid_type_error: "Title is require",
    })
    .min(3, { message: "Title is too short" }),
});

export {CreateBoard}