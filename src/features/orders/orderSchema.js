import { z } from "zod";

export const orderSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(4, "Subject is required"),
  city: z.string().min(4, "City is required"),
  state: z.string().min(4, "State is required"),
  zipcode: z.string().min(4, "Zipcode is required"),
  country: z.string().min(4, "Country is required"),
  pincode: z.string().min(4, "PINcode is required"),
});
