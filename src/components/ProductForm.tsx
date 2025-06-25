// src/components/ProductForm.tsx
import { useState } from "react";
import { TextField, Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/Slices/productsSlice";
import { productSchema } from "../schemas/productSchema";
import { z } from "zod";

const ProductForm=({ onClose }: { onClose: () => void })=> {
  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");
  const [errors, setErrors] = useState<{ name?: string; seller?: string }>({});
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const result = productSchema.safeParse({ name, seller });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    dispatch(addProduct({ name, seller }));
    onClose();
  };

  return (
    <Stack spacing={2} sx={{ mt: 2, maxWidth: 300 }}>
      <TextField
        label="שם מוצר"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="שם מוכר"
        value={seller}
        onChange={(e) => setSeller(e.target.value)}
        error={!!errors.seller}
        helperText={errors.seller}
      />
      <Button variant="contained" onClick={handleSubmit}>
        שמור
      </Button>
    </Stack>
  );
}
export default ProductForm