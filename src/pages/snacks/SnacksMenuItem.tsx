import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import { snacksMenu } from "../../seed-data/seed-data";
import { usegetSnacksProductsBySubMenuId } from "../../customRQHooks/Hooks";
import { useParams } from "react-router";
import { ISnacksPage } from "../../interface/types";
import { UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";

function SnacksMenuItem() {
  const { subMenuId } = useParams();
  const selectedCategory: UseQueryResult<ISnacksPage | undefined, unknown> =
    usegetSnacksProductsBySubMenuId();
  console.log(selectedCategory, "value");

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

  useEffect(() => {
    selectedCategory.refetch();
  }, []);

  return (
    <Container>
      <Slider {...settings}>
        {selectedCategory.data?.subMenus?.map((subMenu, index) => (
          <Box key={index} sx={{ display: "flex" }}>
            <Button
              sx={{
                border: "1px dashed",
                borderRadius: "15px",
                width: "130px",
              }}
              variant="outlined"
            >
              {subMenu.title}
            </Button>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}

export default SnacksMenuItem;
