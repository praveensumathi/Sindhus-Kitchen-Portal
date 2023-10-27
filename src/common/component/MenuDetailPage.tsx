import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import { menuDetailPage } from "../../seed-data/Seed-data";

const CustomPrevArrow = (props) => (
  <div {...props} className="custom-prev-arrow">
    &#11164;
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="custom-next-arrow">
    &#11166;
  </div>
);

function MenuDetailPage() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
  };

  const theme = useTheme();
  const isBelowMediumSize = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container>
      <Grid container mt={4}>
        <Grid item md={6} xs={12}>
          <Slider {...settings}>
            {menuDetailPage.image.map((image, index) => (
              <Box
                key={index}
                sx={{ height: isBelowMediumSize ? "50vh" : "75vh" }}
              >
                <img
                  src={image}
                  alt="sindhus-menu"
                  height="100%"
                  width="100%"
                  className="menuDetail-slickerImage"
                />
              </Box>
            ))}
          </Slider>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Container>
            <Typography sx={{ fontWeight: "bolder", fontSize: "34px" }}>
              {menuDetailPage.title}
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
              $ {menuDetailPage.price}
            </Typography>
            <Typography>
              By &nbsp;
              <span style={{ textDecoration: "underline" }}>
                Sindhu's Kitchen
              </span>
            </Typography>
            <Typography sx={{ fontSize: "small" }}>
              {menuDetailPage.description}
            </Typography>
            <Divider sx={{ margin: "10px 0" }} />
            <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
              Servings per plate
            </Typography>
            <Box
              sx={{
                border: "1.5px solid",
                padding: "5px",
                borderRadius: "5px",
                maxWidth: "100px",
                textAlign: "center",
              }}
            >
              {menuDetailPage.servePerPlate} Persons
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  margin: "10px 0",
                  backgroundColor: "#ee296a",
                  "&:hover": { backgroundColor: "#fff", color: "#ee296a" },
                }}
                fullWidth
              >
                ADD TO CART
              </Button>
              <Button variant="contained" fullWidth color="secondary">
                BUY IT NOW
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MenuDetailPage;
