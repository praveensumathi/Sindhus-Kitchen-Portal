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


function ProductDetail() {
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    arrows:false 
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
                    {menuDetail.title}
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
                    $ {menuDetail.price} &nbsp;
                    <span style={{ fontSize: "12px" }}>
                      (Per Piece / Plate)
                    </span>
                  </Typography>
                  <Typography>
                    By &nbsp;
                    <span style={{ textDecoration: "underline" }}>
                      Shindhu's Kitchen
                    </span>
                  </Typography>
                  <Typography sx={{ fontSize: "small" }}>
                    {menuDetail.description}
                  </Typography>
                  <Divider sx={{ margin: "10px 0" }} />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      margin: "5px 0",
                    }}
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
                    {menuDetail.netWeight} lb
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      margin: "5px 0",
                    }}
                  >
                    Serving Sizes
                  </Typography>
                  {menuDetail.servingSizesWithPrice &&
                    menuDetail.servingSizesWithPrice.length > 0 &&
                    menuDetail.servingSizesWithPrice.map((size, index) => (
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
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProductDetail;
