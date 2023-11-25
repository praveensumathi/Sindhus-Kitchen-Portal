import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../services/api";
import { IProduct } from "../../interface/types";
import { useSnackBar } from "../../context/SnackBarContext";

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

function ProductDetail() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const navigate = useNavigate();
  const theme = useTheme();
  const { productId } = useParams();
  const { updateSnackBarState } = useSnackBar();

  const isBelowMediumSize = useMediaQuery(theme.breakpoints.down("md"));

  const [menuDetail, setMenuDetail] = useState<IProduct>();

  const fetchProductDetail = async () => {
    try {
      const response = await fetchProductById(productId);
      setMenuDetail(response.data.data);
      document.title = response.data.data.title ?? "Sindhu's";
    } catch (error: any) {
      if (error.response && error.response.data) {
        updateSnackBarState(true, error.response.data.message, "error");
      }
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <>
      <IconButton
        sx={{
          float: "left",
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>

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
              {menuDetail?.images &&
                menuDetail.images.length > 0 &&
                menuDetail.images.map((image, index) => (
                  <Box>
                    <Card
                      key={index}
                      sx={{
                        height: isBelowMediumSize ? "50vh" : "70vh",
                        marginRight: "20px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="sindhus-menu"
                        height="100%"
                        width="100%"
                        src={image}
                      />
                    </Card>
                  </Box>
                ))}
            </Slider>
          </Grid>
          <Grid item md={7} xs={12}>
            <Container>
              {menuDetail && (
                <>
                  <Typography sx={{ fontWeight: "bolder", fontSize: "34px" }}>
                    {menuDetail.title}
                  </Typography>
                  {!!menuDetail.price && (
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "25px",
                        margin: "5px 0",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      $ {menuDetail.price}
                      <span style={{ fontSize: "12px" }}>
                        (Per Piece / Plate)
                      </span>
                    </Typography>
                  )}
                  <Typography sx={{ mt: 2 }}>
                    By &nbsp;
                    <span style={{ textDecoration: "underline" }}>
                      Shindhu's Kitchen
                    </span>
                  </Typography>
                  <Divider sx={{ margin: "10px 0" }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    Description
                    <Typography sx={{ fontSize: "small", my: 1 }}>
                      {menuDetail.description}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      margin: "5px 0",
                    }}
                  >
                    Net Weight
                  </Typography>
                  <Box
                    sx={{
                      border: "1.5px solid #57ccb5",
                      borderRadius: "5px",
                      maxWidth: "70px",
                      textAlign: "center",
                      p: 1.2,
                      mt: 1,
                    }}
                  >
                    {menuDetail.netWeight} lb
                  </Box>

                  {menuDetail.servingSizeDescription && (
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        margin: "5px 0",
                      }}
                    >
                      servingSizeDescription
                      <Typography
                        sx={{
                          whiteSpace: "pre-line",
                        }}
                      >
                        {menuDetail.servingSizeDescription}
                      </Typography>
                    </Typography>
                  )}

                  {menuDetail.servingSizesWithPrice &&
                    menuDetail.servingSizesWithPrice.length > 0 &&
                    menuDetail.servingSizesWithPrice.map((size, index) => (
                      <>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            margin: "8px 0",
                          }}
                        >
                          Serving Sizes
                        </Typography>
                        <Typography
                          sx={{ fontSize: "small", display: "flex" }}
                          key={index}
                        >
                          {size.size} -
                          <span style={{ fontWeight: "bolder" }}>
                            &nbsp; [${size.price}]
                          </span>
                        </Typography>
                      </>
                    ))}
                </>
              )}
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProductDetail;
