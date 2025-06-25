
// import { Outlet } from 'react-router';
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
const AppLayout = () => {

  return (
    //  <div style={{ padding: "2rem" }}>
    //   <h1>📦 רשימת מוצרים</h1>
    //   <Outlet />
    // </div>
    <>
     <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>🔷 מערכת מוצרים</Typography>
          <Button color="inherit" component={Link} to="/">בית</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      </>
  );
};

export default AppLayout;

