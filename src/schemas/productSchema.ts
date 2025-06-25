// src/validations/productSchema.ts
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "שם המוצר חייב להכיל לפחות 2 תווים"),
  seller: z.string().min(2, "שם המוכר חייב להכיל לפחות 2 תווים"),
});

export type ProductFormData = z.infer<typeof productSchema>;
