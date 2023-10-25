import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  homePageSlicker,
  homeSearchCityDropDown,
  homeSearchMenusDropDown,
} from "../../seed-data/Seed-data";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

function HomePageSlicker() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <Box sx={{ position: "relative" }}>
      <Slider {...settings}>
        {homePageSlicker.map((content, index) => (
          <Box style={{ display: "flex", flexDirection: "column" }} key={index}>
            <Box className="page-banner" style={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              />
              <img
                src={content.image}
                alt={content.heading}
                height={matches ? "400px" : "500px"}
                width="100%"
                style={{ zIndex: 1 }}
                className="home-slicker-image"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                  width: "100%",
                }}
              >
                <Typography sx={{ fontWeight: "bolder", fontSize: "40px" }}>
                  {content.heading}
                </Typography>
                <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
                  {content.subHeading}
                </Typography>
                <Typography>{content.content}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          top: "70%",
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
            width: "70%",
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
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <LocationOnIcon sx={{ color: "orange" }} />
            </IconButton>
            <Autocomplete
              disableClearable
              sx={{ width: "100%" }}
              options={homeSearchCityDropDown.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Cities"
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
          <Grid
            item
            md={8}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <Divider
              sx={{ height: 28, m: 0.5, display: matches ? "none" : "block" }}
              orientation="vertical"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ color: "#000" }} />
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
