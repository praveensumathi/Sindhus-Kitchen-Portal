import React from "react";
import Container from "@mui/material/Container";
import SearchBar from "./SearchBar";
import CateringProduct from "./CateringProduct";
import { Box, Typography } from "@mui/material";

function CateringPage() {
  return (
    <>
      <Box sx={{ height: "200px", position: "relative" }}>
        <Box
          style={{
            backgroundImage: "url('assets/images/sssurf3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "rotate(180deg)",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            top: 0,
          }}
        ></Box>
        <Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              color: "white",
              fontWeight: 600,
              fontSize: "2rem",
              pt: 3,
            }}
          >
            Catering Menu
          </Typography>
        </Box>
      </Box>
      <Container sx={{ mt: 1 }}>
        <SearchBar />
        <CateringProduct />
      </Container>
    </>
  );
}

export default CateringPage;
