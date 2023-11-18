import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import { ISubMenu } from "../../interface/types";

interface IProps {
  onSubMenuClick(submenuId: string): void;
  snacksSubMenus: ISubMenu[];
  selectedSubMenuId: string;
}

function SnacksMenuItem({
  onSubMenuClick,
  snacksSubMenus,
  selectedSubMenuId,
}: IProps) {
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
        <Box>
          <Button
            onClick={() => onSubMenuClick("")}
            sx={{
              border: "1px dashed",
              borderRadius: "15px",
              width: "130px",
            }}
            variant={!selectedSubMenuId ? "contained" : "outlined"}
          >
            All
          </Button>
        </Box>
        {snacksSubMenus.length > 0 &&
          snacksSubMenus.map((subMenu, index) => (
            <Box key={index} sx={{ display: "flex" }}>
              <Button
                onClick={() => onSubMenuClick(subMenu._id)}
                sx={{
                  border: "1px dashed",
                  borderRadius: "15px",
                  width: "130px",
                }}
                variant={
                  selectedSubMenuId == subMenu._id ? "contained" : "outlined"
                }
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
