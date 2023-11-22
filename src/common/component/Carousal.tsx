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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    slidesToShow: 4.2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
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
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickViewAll = (menuId: string) => {
    navigate(`/productsByCategory/${menuId}`);
  };

  return (
    category &&
    category.menuDatas && (
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
              {category.menuDatas.title}
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                padding: 0.5,
              }}
              onClick={() => handleClickViewAll(category.menuDatas._id)}
            >
              View All
              <ArrowForwardIcon sx={{ fontSize: "18px" }} />
            </Button>
          </Box>
          <Box sx={{ py: 2 }}>
            <Slider {...settings}>
              {category.menuDatas.products.length > 0 &&
                category.menuDatas.products.map((product, productIndex) => (
                  <Box
                    key={productIndex}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <CommonProductCard product={product} />
                  </Box>
                ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    )
  );
}

export default Carousel;
