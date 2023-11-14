import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import { Card, CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
import { usegetAllDiningOutMenuDatas} from "../../customRQHooks/Hooks";

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

function Categories() {

  const categories = usegetAllDiningOutMenuDatas();
 console.log("categories", categories);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
      <Slider {...settings} className="category-slider">
        {categories.data &&
          categories.data.length > 0 &&
          categories.data?.map((category,index) => (
            <Box key={index} >
              <Card 
                sx={{
                  boxShadow: 1,
                  height: "160px",
                  width: "110px",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  src={category.image}
                  alt={category.title}
                  height="100"
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
    </Container>
  );
}

export default Categories;
