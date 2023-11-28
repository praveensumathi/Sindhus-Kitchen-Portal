import Box from "@mui/material/Box";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import { Card, CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
import { useGetAllDiningOutMenuDatas } from "../../customRQHooks/Hooks";
import { useEffect, useState } from "react";
import { ICategory } from "../../interface/types";
import { useNavigate } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store";

function Categories() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const { data } = useGetAllDiningOutMenuDatas();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setCategories([...data]);
    }
  }, [data]);

  const theme = useTheme();
  const isBelowMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: !isBelowMediumScreen,
        },
      },
    ],
  };

  const handleClickProduct = (menuId: string) => {
    navigate(`/productsByCategory/${menuId}`);
  };

  return (
    <Container>
      {categories && categories.length > 0 ? (
        <>
          <Typography
            sx={{
              fontWeight: 800,
              color: "black",
              lineHeight: 2,
            }}
            variant="h5"
          >
            Menus
          </Typography>
          <Slider {...settings}>
            {categories?.map((category, index) => (
              <Box
                key={index}
                sx={{
                  height: "9rem",
                  width: "14rem !important",
                }}
                onClick={() => handleClickProduct(category._id)}
              >
                <Card
                  sx={{
                    boxShadow: 1,
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={category.image}
                    alt={category.title}
                    height="100px"
                  />
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ padding: 1, fontWeight: 600 }}
                  >
                    {category.title}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Slider>
        </>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{
            height: "60vh",
            overflow: "hidden",
          }}
        >
          <StoreIcon sx={{ fontSize: "5rem", opacity: 0.5 }}></StoreIcon>
          <Typography sx={{ opacity: 0.5 }}>No products available</Typography>
        </Box>
      )}
    </Container>
  );
}

export default Categories;
