import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import { Card, CardMedia } from "@mui/material";
import Container from "@mui/material/Container";

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
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
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
        variant="h6"
      >
        Categories
      </Typography>
      <Slider {...settings} className="category-slider">
        {categoriesData.map((category, index) => (
          <Box sx={{ padding: "10px", width: "100px" }}>
            <Card
              key={index}
              sx={{
                boxShadow: 1,
                borderRadius: "10px",
              }}
            >
              <CardMedia
                component="img"
                src={category.imageSrc}
                alt={category.title}
                height="100"
              />
              <Typography
                gutterBottom
                component="div"
                sx={{ padding: 1, fontWeight: 600 }}
              >
                Lizard
              </Typography>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}

export default Categories;
