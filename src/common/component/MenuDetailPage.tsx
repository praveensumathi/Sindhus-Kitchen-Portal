import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../services/api";
import { IProductDetail } from "../../interface/types";
import { useSnackBar } from "../../context/SnackBarContext";

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
    arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const theme = useTheme();
  const { productId } = useParams();
  const { updateSnackBarState } = useSnackBar();

  const isBelowMediumSize = useMediaQuery(theme.breakpoints.down("md"));

  const [menuDetail, setMenuDetail] = useState<IProductDetail>();

  const fetchProductDetail = async () => {
    try {
      const response = await fetchProductById(productId);
      setMenuDetail(response.data);
    } catch (error: any) {
      if (error.response && error.response.data) {
        console.log(error.response.data);
        updateSnackBarState(true, error.response.data.message, "error");
      }
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <Container
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Grid
        container
        mt={4}
        sx={{ maxWidth: isBelowMediumSize ? "100%" : "80%" }}
      >
        <Grid item md={5} xs={12}>
          <Slider {...settings}>
            {menuDetail?.product.images &&
              menuDetail.product.images.length > 0 &&
              menuDetail.product.images.map((image, index) => (
                <Box
                  sx={{
                    height: isBelowMediumSize ? "50vh" : "75vh",
                  }}
                  key={index}
                >
                  <img
                    src={image}
                    alt="sindhus-menu"
                    height="100%"
                    width="100%"
                  />
                </Box>
              ))}
          </Slider>
        </Grid>
        <Grid
          item
          md={7}
          xs={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Container>
            {menuDetail && (
              <>
                <Typography sx={{ fontWeight: "bolder", fontSize: "34px" }}>
                  {menuDetail.product.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    margin: "5px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  $ {menuDetail.product.price} &nbsp;
                  <span style={{ fontSize: "12px" }}>(Per Piece / Plate)</span>
                </Typography>
                <Typography>
                  By &nbsp;
                  <span style={{ textDecoration: "underline" }}>
                    Shindhu's Kitchen
                  </span>
                </Typography>
                <Typography sx={{ fontSize: "small" }}>
                  {menuDetail.product.description}
                </Typography>
                <Divider sx={{ margin: "10px 0" }} />
                <Typography
                  sx={{ fontSize: "15px", fontWeight: "500", margin: "5px 0" }}
                >
                  Net Weight
                </Typography>
                <Box
                  sx={{
                    border: "1.5px solid",
                    borderRadius: "5px",
                    maxWidth: "70px",
                    textAlign: "center",
                  }}
                >
                  {menuDetail.product.netWeight} lb
                </Box>
                <Typography
                  sx={{ fontSize: "15px", fontWeight: "500", margin: "5px 0" }}
                >
                  Serving Sizes
                </Typography>
                {menuDetail.product.servingSizesWithPrice.length > 0 &&
                  menuDetail.product.servingSizesWithPrice.map(
                    (size, index) => (
                      <Typography
                        sx={{ fontSize: "small", display: "flex" }}
                        key={index}
                      >
                        {size.size} -
                        <span style={{ fontWeight: "bolder" }}>
                          &nbsp; [${size.price}]
                        </span>
                      </Typography>
                    )
                  )}
              </>
            )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MenuDetailPage;
