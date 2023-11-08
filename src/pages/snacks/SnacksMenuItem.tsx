import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import { snacksMenu } from "../../seed-data/seed-data";

function SnacksMenuItem() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
      <Slider {...settings}>
        {snacksMenu.map((menuItems, index) => (
          <Box key={index} sx={{ display: "flex" }}>
            <Button
              sx={{
                border: "1px dashed",
                borderRadius: "15px",
                width: "130px",
              }}
              variant="outlined"
            >
              {menuItems.menu}
            </Button>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}

export default SnacksMenuItem;
