import {
  Box,
  // Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CommonProductCard from "../../common/component/CommonProductCard";
import SnacksMenuItem from "./SnacksMenuItem";
import { IProductCardList } from "../../interface/types";
import { useState } from "react";

function SnacksPage() {
  const theme = useTheme();

  const [products, setProducts] = useState<IProductCardList[]>([]);

  const isBelowMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            mt: 3,
          }}
        >
          <div
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
          ></div>
          <Grid container spacing={3} sx={{ overflow: "hidden" }}>
            <Grid
              item
              xs={3}
              sx={{
                position: "relative",
                display: isBelowMediumScreen ? "none" : "block",
              }}
            >
              <img
                src="assets/images/sweets.png"
                alt="sweets"
                height={"140px"}
                style={{
                  borderRadius: "50px",
                  position: "absolute",
                  left: "-40px",
                  top: 5,
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "150px",
              }}
            >
              <Typography variant="h4" sx={{ color: "white", fontWeight: 600 }}>
                Snacks
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                position: "relative",
                display: isBelowMediumScreen ? "none" : "block",
              }}
            >
              <img
                src="assets/images/butter-cookies.png"
                alt="savouries"
                height={"150px"}
                style={{
                  borderRadius: "50px",
                  position: "absolute",
                  right: "-80px",
                  top: 4,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Container>
        <SnacksMenuItem></SnacksMenuItem>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}
                key={product._id}
              >
                <CommonProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "140px",
          backgroundImage: "url(assets/images/wave4.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
    </>
  );
}

export default SnacksPage;
