import { Box } from "@mui/material";
import NavBar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
