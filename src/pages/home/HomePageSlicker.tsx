import {
  Autocomplete,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IMenuList, IProductDropDownData } from "../../interface/types";
import { useEffect, useState } from "react";
import { usegetAllMenus } from "../../customRQHooks/Hooks";
import { homePageSlicker } from "../../seed-data/seed-data";
import Fade from "react-reveal/Fade";
import { getProductsByMenuIdWithSearchTerm } from "../../services/api";
import { Link } from "react-router-dom";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [products, setProducts] = useState<IProductDropDownData[]>([]);

  const { data: menuData, isLoading, isError } = usegetAllMenus();

  useEffect(() => {
    if (!isLoading && !isError) {
      setMenus(menuData);
    }
  }, [menuData, isLoading, isError]);

  useEffect(() => {
    if (selectedMenuId) {
      getProductsByMenuIdWithSearchTerm(
        selectedMenuId,
        searchTerm,
        setProducts
      );
    }
  }, [selectedMenuId]);

  const handleProductSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm || "");
  };

  const handleMenuChange = (_event, newValue: IMenuList) => {
    const selectedMenu = menus.find((menu) => menu._id === newValue._id);
    if (selectedMenu) {
      setSelectedMenuId(selectedMenu._id);
    }
  };

  useEffect(() => {
    if (!selectedMenuId && !isLoading && !isError) {
      setMenus(menuData);
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
                <Fade top>
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
                </Fade>
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
            md={5}
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
              <RestaurantIcon color="secondary" />
            </IconButton>
            <Autocomplete
              disablePortal
              sx={{ width: "100%" }}
              options={menus.map((item) => ({
                ...item,
                label: item.title,
              }))}
              onChange={(event, newValue) => {
                handleMenuChange(event, newValue!);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Menus"
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                  }}
                  fullWidth
                  variant="standard"
                />
              )}
              renderOption={(props, option) => (
                <List component={"li"} {...props}>
                  <ListItem disablePadding>
                    <ListItemText>{option.title}</ListItemText>
                  </ListItem>
                </List>
              )}
            />
          </Grid>
          <Grid
            item
            md={7}
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
              <SearchIcon color="secondary" />
            </IconButton>
            <Autocomplete
              sx={{ width: "100%" }}
              onChange={handleProductSearch}
              options={products.map((item) => ({
                ...item,
                label: item.title,
              }))}
              renderOption={(props, option) => (
                <Link
                  to={`/detail/${option._id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <li
                    {...props}
                    style={{
                      margin: "5px 0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={option.posterURL ?? ""}
                      style={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {option.title}
                    </Typography>
                  </li>
                </Link>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search Your favorite snacks, food, etc..."
                  InputProps={{
                    ...params.InputProps,
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
