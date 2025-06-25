import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { Typography } from "@mui/material";
import NotFound from './NotFound';
const ProductDetails = () => {
      const { id } = useParams();
  const product = useSelector((state: RootState) =>
    state.products.find((p) => p.id === id)
  );

  if (!product) return <NotFound></NotFound>;
  return (
<div>
      <Typography variant="h4">{product.name}</Typography>
      <img src="/assets/product.jpg" alt="product" width={200} />
      <Typography>שם המוכר: {product.seller}</Typography>
      <Typography>תאריך יצירה: {new Date(product.createdAt).toLocaleString()}</Typography>
    </div>  )
}

export default ProductDetails
