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
    <Container>
      <IconButton
        sx={{
          float: "left",
          pl: 0,
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <Box sx={{ my: 2 }}>
        <Grid
          container
          spacing={isBelowMediumSize ? 0 : 6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item md={6} xs={9}>
            <Slider {...settings}>
              {menuDetail?.posterURL &&
                [menuDetail.posterURL]
                  .concat(menuDetail.images)
                  .map((image, index) => (
                    <Box>
                      <Card key={index}>
                        <Box
                          sx={{
                            height: "350px",
                            width: "100%",
                            overflow: "hidden",
                          }}
                        >
                          <CardMedia
                            component="img"
                            alt="sindhus-menu"
                            height="100%"
                            width="100%"
                            src={image}
                          ></CardMedia>
                        </Box>
                      </Card>
                    </Box>
                  ))}
            </Slider>
          </Grid>
          <Grid item md={5} xs={12}>
            <>
              {menuDetail && (
                <>
                  <Typography sx={{ fontWeight: "bolder", fontSize: "28px" }}>
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
                      Sindhu's Kitchen
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
                    menuDetail.servingSizesWithPrice.length > 0 && (
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
                        {menuDetail.servingSizesWithPrice.map((size, index) => (
                          <Typography
                            sx={{ fontSize: "small", display: "flex" }}
                            key={index}
                          >
                            {size.size} -
                            <span style={{ fontWeight: "bolder" }}>
                              &nbsp; [${size.price}]
                            </span>
                          </Typography>
                        ))}
                      </>
                    )}
                </>
              )}
            </>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductDetail;
