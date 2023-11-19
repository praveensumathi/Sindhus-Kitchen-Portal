import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import { Card, CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
import { useGetAllDiningOutMenuDatas } from "../../customRQHooks/Hooks";
import { useEffect, useState } from "react";
import { ICategory } from "../../interface/types";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const { data } = useGetAllDiningOutMenuDatas();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setCategories([...data]);
    }
  }, [data]);

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
        },
      },
    ],
  };

  const handleClickProduct = (menuId: string) => {
    navigate(`/productsByCategory/${menuId}`);
  };

  return (
    <Container>
      <Typography
        sx={{
          fontWeight: 800,
          color: "black",
          lineHeight: 2,
        }}
        variant="h5"
      >
        Categories
      </Typography>
      {categories && (
        <Slider {...settings}>
          {categories.length > 0 &&
            categories?.map((category, index) => (
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
      )}
    </Container>
  );
}

export default Categories;
