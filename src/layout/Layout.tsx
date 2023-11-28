import { Box, useMediaQuery, useTheme } from "@mui/material";
import NavBar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  const theme = useTheme();
  const isBelowSMScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ paddingTop: isBelowSMScreen ? "3.5rem" : "0" }}>
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
