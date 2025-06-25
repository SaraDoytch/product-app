// import React from 'react'
// import { useSelector } from "react-redux";
// import { RootState } from "../store/Store";
// import { Grid, Button, Typography } from "@mui/material";
// import ProductCard from "../components/ProductCard";
// import ProductForm from "../components/ProductForm";
// import { useState } from "react";

// const ProductsList = () => {
//       const products = useSelector((state: RootState) => state.products);
//   const [showForm, setShowForm] = useState(false);
//   return (
// <>
//       <Typography variant="h4" sx={{ mb: 2 }}>רשימת מוצרים</Typography>
//       <Button variant="contained" onClick={() => setShowForm(!showForm)}>
//         הוסף מוצר
//       </Button>
//       {showForm && <ProductForm onClose={() => setShowForm(false)} />}
//       <Grid container spacing={2} sx={{ mt: 2 }}>
//         {products.map((product) => (
//           <Grid item xs={12} sm={6} md={4} key={product.id}>
//             <ProductCard product={product} />
//           </Grid>
//         ))}
//       </Grid>
//     </>  )
// }

// export default ProductsList

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { Grid, Button, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

const ProductsList = () => {
  const products = useSelector((state: RootState) => state.products);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        רשימת מוצרים
      </Typography>
      <Button variant="contained" onClick={() => setShowForm(!showForm)}>
        הוסף מוצר
      </Button>
      {showForm && <ProductForm onClose={() => setShowForm(false)} />}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {products.map((product) => (
          <Grid {...{ item: true, xs: 12, sm: 6, md: 4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsList;
