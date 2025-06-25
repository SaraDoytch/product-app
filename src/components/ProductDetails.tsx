import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { Typography, Button, Stack, Box } from "@mui/material";
import NotFound from './NotFound';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useSelector((state: RootState) =>
    state.products.find((p) => p.id === id)
  );

  if (!product) return <NotFound />;

  return (
    <Stack direction="row" spacing={4} alignItems="flex-start">
      {/* תמונה בצד ימין */}
      <Box>
        <img src="/assets/product.jpg" alt="product" style={{ width: 300, borderRadius: 8 }} />
      </Box>

      {/* טקסט וכפתור בצד שמאל */}
      <Stack spacing={2}>
        <Typography variant="h4">{product.name}</Typography>
        <Typography>שם המוכר: {product.seller}</Typography>
        <Typography>תאריך יצירה: {new Date(product.createdAt).toLocaleString()}</Typography>

        <Button
          variant="outlined"
          sx={{ width: '10vw', padding: '4px 8px', fontSize: '0.75rem' }}
          onClick={() => navigate(-1)}
        >
          חזרה לרשימה
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
