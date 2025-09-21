import {z} from "zod";

export const loginSchema = z.object({
  email: z.string().trim().min(1, "Required").email(),
  password: z.string().min(1, "Required"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "A name is required"),
  email: z.string().trim().min(1, "An email is required").email(),
  password: z.string().min(8, "Minimum of 8 characters required"),
});