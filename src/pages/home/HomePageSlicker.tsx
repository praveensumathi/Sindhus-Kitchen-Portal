import {
  Autocomplete,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
// import {
//   homePageSlicker,
//   homeSearchCityDropDown,
//   homeSearchMenusDropDown,
// } from "../../seed-data/seed-data";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { homePageSlicker, homeSearchCityDropDown, homeSearchMenusDropDown } from "../../seed-data/Seed-data";
// import { usegetAllMenus } from "../../customRQHooks/Hooks";
import { IMenuList } from "../../interface/types";
import { useEffect, useState } from "react";
import { usegetAllMenus } from "../../customRQHooks/Hooks";


function HomePageSlicker() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  const theme = useTheme();
  const isBelowMediumSize = useMediaQuery(theme.breakpoints.down("md"));
  const [menus, setMenus] = useState<IMenuList[]>([]);



    const { data: menuData, isLoading, isError,} = usegetAllMenus();

   useEffect(() => {
     if (!isLoading && !isError) {
       setMenus(menuData);
       console.log(menuData)
     }
   }, [menuData, isLoading, isError]);

  return (
    <Box sx={{ position: "relative" }}>
      <Slider {...settings}>
        {homePageSlicker.map((content, index) => (
          <Box style={{ display: "flex", flexDirection: "column" }} key={index}>
            <Box className="page-banner" style={{ position: "relative" }}>
              <img
                src={content.image}
                alt={content.heading}
                height={isBelowMediumSize ? "300px" : "500px"}
                width="100%"
                className="home-slicker-image"
              />
              <Box
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                }}
              />
              <Container
                sx={{
                  position: "absolute",
                  top: isBelowMediumSize ? "30%" : "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                  width: "100%",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: isBelowMediumSize ? "45px" : "70px",
                  }}
                >
                  {content.heading}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: isBelowMediumSize ? "20px" : "25px",
                  }}
                >
                  {content.subHeading}
                </Typography>
                <Typography
                  sx={{ fontSize: isBelowMediumSize ? "18px" : "20px" }}
                >
                  {content.content}
                </Typography>
              </Container>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          top: isBelowMediumSize ? "60%" : "70%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: isBelowMediumSize ? "70%" : "50%",
          }}
        >
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: isBelowMediumSize ? "10px" : "10px 0 0 10px",
              height: "50px",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <RestaurantIcon sx={{ color: "orange" }} />
            </IconButton>
            <Autocomplete
              disableClearable
              sx={{ width: "100%" }}
              options={menus.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Menus"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    disableUnderline: true,
                    // sx: { padding: "15px" },
                  }}
                  fullWidth
                  variant="standard"
                />
              )}
            />
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              marginTop: isBelowMediumSize ? "5px" : 0,
              borderRadius: isBelowMediumSize ? "10px" : "0 10px 10px 0",
              height: "50px",
            }}
          >
            <Divider
              sx={{
                height: 28,
                m: 0.5,
                display: isBelowMediumSize ? "none" : "block",
              }}
              orientation="vertical"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ color: "#ffa500" }} />
            </IconButton>
            <Autocomplete
              freeSolo
              disableClearable
              sx={{ width: "100%" }}
              options={homeSearchMenusDropDown}
              getOptionLabel={(option: any) => option.name}
              renderOption={(props, option) => (
                <li {...props} style={{ margin: "5px 0" }}>
                  <img
                    src={option.image}
                    alt={option.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "8px",
                    }}
                  />
                  <Typography sx={{ fontWeight: "bolder" }}>
                    {option.name}
                  </Typography>
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search Your favorite snacks, food, etc..."
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    disableUnderline: true,
                  }}
                  fullWidth
                  variant="standard"
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePageSlicker;
