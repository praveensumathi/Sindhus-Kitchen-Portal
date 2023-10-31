import { Box } from "@mui/material";
import NavBar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
