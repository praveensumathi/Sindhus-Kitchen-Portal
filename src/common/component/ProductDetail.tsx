import Slider from "react-slick";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../services/api";
import { IProduct } from "../../interface/types";
import { useSnackBar } from "../../context/SnackBarContext";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

function ProductDetail() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigate = useNavigate();
  const theme = useTheme();
  const { productId } = useParams();
  const { updateSnackBarState } = useSnackBar();
  const [menuDetail, setMenuDetail] = useState<IProduct>();

  const isBelowMediumSize = useMediaQuery(theme.breakpoints.down("md"));

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
          spacing={5}
        >
          <Grid item md={5} xs={12}>
            <Slider {...settings}>
              {menuDetail?.posterURL &&
                [menuDetail.posterURL]
                  .concat(menuDetail.images)
                  .map((image, index) => (
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
