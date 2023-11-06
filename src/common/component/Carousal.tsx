import React from "react";
import { ICategoryWithProducts } from "../../interface/types";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import CommonProductCard from "./CommonProductCard";

interface IProps {
  category: ICategoryWithProducts;
}

export const ProductsSliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  lazyLoad: "ondemand",
};

function Carousel(props: IProps) {
  const { category } = props;
  const navigate = useNavigate();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickViewAll = (categoryId: string) => {
    navigate(`/productsByCategory/${categoryId}`);
    console.log(categoryId);
  };

  return (
    category &&
    category.products.length > 0 && (
      <Container>
        <Box marginTop={1.8}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            pb={1}
          >
            <Typography
              sx={{
                margin: "0px 10px 0px 0px",
                fontWeight: 800,
                color: "black",
                lineHeight: 2,
              }}
              variant="h5"
            >
              {category.data}
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                padding: 0.5,
              }}
              onClick={() => handleClickViewAll(category._id)}
            >
              View All
            </Button>
          </Box>
          <Slider {...settings}>
            {category.products.map((product, index) => (
              <Box key={index}>
                <CommonProductCard product={product} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    )
  );
}

export default Carousel;
