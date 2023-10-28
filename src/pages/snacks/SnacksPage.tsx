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
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,256L14.1,229.3C28.2,203,56,149,85,149.3C112.9,149,141,203,169,224C197.6,245,226,235,254,229.3C282.4,224,311,224,339,218.7C367.1,213,395,203,424,186.7C451.8,171,480,149,508,154.7C536.5,160,565,192,593,202.7C621.2,213,649,203,678,176C705.9,149,734,107,762,101.3C790.6,96,819,128,847,149.3C875.3,171,904,181,932,181.3C960,181,988,171,1016,186.7C1044.7,203,1073,245,1101,240C1129.4,235,1158,181,1186,154.7C1214.1,128,1242,128,1271,138.7C1298.8,149,1327,171,1355,197.3C1383.5,224,1412,256,1426,272L1440,288L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
          ></path>
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
              <Typography variant="h4">Snacks</Typography>
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
          <Grid container spacing={3}>
            {productCardList.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={product.id}
                sx={{ margin: "15px" }}
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
