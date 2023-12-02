import Box from "@mui/material/Box";
import Slider from "react-slick";
import { ISubMenu } from "../../interface/types";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { useEffect, useState } from "react";

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
  const theme = useTheme();
  const isBelowMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 70);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          arrows: !isBelowMediumScreen,
        },
      },
    ],
  };

  
  return (
    <Container
      sx={{
        position: "sticky",
        top: "70px",
        zIndex: "1000",
        backgroundColor: isSticky ? theme.palette.primary.main : "white",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        py: 2,
      }}
    >
      {snacksSubMenus && snacksSubMenus.length > 0 && (
        <Slider {...settings}>
          <Box>
            <Button
              onClick={() => onSubMenuClick("")}
              sx={{
                border: "1px dashed",
                borderRadius: "15px",
                width: "120px",
                color: isSticky ? "white" : "black",
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
                    color: isSticky ? "white" : "black",
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
      )}
    </Container>
  );
}

export default SnacksMenuItem;
