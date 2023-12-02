import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CateringProduct from "./CateringProduct";
import SearchBar from "./SearchBar";
import Fade from "react-reveal/Fade";
import { useState } from "react";

function CateringPage() {
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const [menuLength, setMenuLength] = useState(0);

  return (
    <>
      <Box sx={{ height: "200px", position: "relative" }}>
        <Box
          style={{
            backgroundImage: "url('assets/images/sssurf7.png')",
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
          <Fade top>
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
          </Fade>
        </Box>
      </Box>
      <Container>
        <SearchBar
          onSelectMenu={(menuId: string) => setSelectedMenuId(menuId)}
          onSelectProduct={(productId: string) =>
            setSelectedProductId(productId)
          }
          onCateringMenusLength={(menuLength: number) =>
            setMenuLength(menuLength)
          }
        />
      </Container>
      <CateringProduct
        selectedMenuId={selectedMenuId}
        selectedProductId={selectedProductId}
        menuLength={menuLength}
      />
    </>
  );
}

export default CateringPage;
