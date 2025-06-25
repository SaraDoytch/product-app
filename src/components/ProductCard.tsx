import React from 'react'
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "../store/Slices/productsSlice";

const ProductCard = ({ product }: { product: Product }) => {
      const navigate = useNavigate();
  return (
 <Card onClick={() => navigate(`/product/${product.id}`)} sx={{ cursor: "pointer", width: 300 }}>
      <CardMedia
        component="img"
        height="300"
        image="/assets/product.jpg" 
        alt="product"
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
      </CardContent>
    </Card>  )
}

export default ProductCard

