
import { Outlet } from 'react-router';

const AppLayout = () => {

  return (
     <div style={{ padding: "2rem" }}>
      <h1>📦 רשימת מוצרים</h1>
      <Outlet />
    </div>
  );
};

export default AppLayout;
