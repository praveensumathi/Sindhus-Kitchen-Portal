import Container from "@mui/material/Container";
import CommonProductCard from "../../common/component/CommonProductCard";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SnacksMenuItem from "./SnacksMenuItem";
import { productCardList } from "../../seed-data/Seed-data";

function SnacksPage() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 2400 650"
          opacity="0.76"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            transform: "rotate(180deg)",
          }}
        >
          <g
            fill="hsl(32, 100%, 51%)"
            transform="matrix(1,0,0,1,7.6488037109375,233.50568389892578)"
          >
            <path
              d="M-10,10C54.58333333333333,24.375,172.91666666666666,91.29166666666667,300,79C427.08333333333337,66.70833333333333,475,-42.958333333333336,600,-49C725,-55.041666666666664,775,50.416666666666664,900,50C1025,49.583333333333336,1075,-52.25,1200,-51C1325,-49.75,1375,53.708333333333336,1500,56C1625,58.291666666666664,1675,-45,1800,-40C1925,-35,1975,74.58333333333333,2100,80C2225,85.41666666666667,2285.4166666666665,-80.66666666666667,2400,-14C2514.5833333333335,52.66666666666667,3254.1666666666665,209.58333333333331,2650,400C2045.8333333333335,590.4166666666667,156.25,795.8333333333334,-500,900"
              transform="matrix(1,0,0,1,0,142)"
              opacity="NaN"
            ></path>
          </g>
        </svg>

        <Box sx={{ mt: 2 }}>
          <Grid container spacing={3} sx={{ overflow: "hidden" }}>
            <Grid
              item
              xs={3}
              sx={{
                position: "relative",
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
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
      </div>

      <Container sx={{ mt: 6 }}>
        <SnacksMenuItem></SnacksMenuItem>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={4}>
            {productCardList.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                key={product.id}
                sx={{
                  dispaly: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CommonProductCard
                  title={product.title}
                  mrpprice={product.mrpprice}
                  offerprice={product.offerprice}
                  imageUrl={product.imageUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default SnacksPage;
