import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Min 8 charecters"),
});

export const registerSchema = z.object({
  name: z.string().min(4, "Name required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Min 8 charecters"),
});
