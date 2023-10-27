import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import { Card, CardMedia } from "@mui/material";

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
  const categoriesData = [
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaKWflnOW4iWdbSifBVmutTj6ouDi1tj23g&usqp=CAU",
      title: "Idiyappam",
    },
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.s2ZLXwMZ3JjRPraZJfIxRQHaEK?w=334&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "dinner",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaKWflnOW4iWdbSifBVmutTj6ouDi1tj23g&usqp=CAU",
      title: "Idiyappam",
    },
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.s2ZLXwMZ3JjRPraZJfIxRQHaEK?w=334&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "dinner",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaKWflnOW4iWdbSifBVmutTj6ouDi1tj23g&usqp=CAU",
      title: "Idiyappam",
    },
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.s2ZLXwMZ3JjRPraZJfIxRQHaEK?w=334&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "dinner",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaKWflnOW4iWdbSifBVmutTj6ouDi1tj23g&usqp=CAU",
      title: "Idiyappam",
    },
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.s2ZLXwMZ3JjRPraZJfIxRQHaEK?w=334&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "dinner",
    },
  ];
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <Box>
      <Typography
        sx={{
          margin: "0px 10px 0px 0px",
          fontWeight: 800,
          color: "black",
          lineHeight: 3,
          marginTop: -1,
        }}
      >
        Categories
      </Typography>
      <Slider {...settings} className="category-slider">
        {categoriesData.map((category, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: 3,
              borderRadius: "10px",
              maxWidth: "90%",
            }}
          >
            <CardMedia
              component="img"
              src={category.imageSrc}
              alt={category.title}
              height="100"
            />

            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default Categories;
