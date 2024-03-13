import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(2, {message: "Name is required"}),
  email: z.string().email({message: "Email is required"})
})

export type LoginSchema = z.infer<typeof loginSchema>