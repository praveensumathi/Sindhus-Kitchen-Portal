import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { homePageSlicker } from "../../seed-data/Seed-data";

function HomePageSlicker() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
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
                height="500px"
                width="100%"
                style={{ zIndex: 1 }}
                className="home-slicker-image"
              />
              <Box
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: "bolder" }}>
                  {content.heading}
                </Typography>
                <Typography sx={{ fontSize: "xx-large" }}>
                  {content.subHeading}
                </Typography>
                <Typography sx={{ fontSize: "x-large" }}>
                  {content.content}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default HomePageSlicker;
