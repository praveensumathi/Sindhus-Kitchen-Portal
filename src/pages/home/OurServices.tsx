import { Grid, Box, Typography, Container, useMediaQuery } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { OurServicesIconEnums } from "../../enums/OurServicesIconEnum";
import { IOurServices } from "../../interface/types";
import { useOurServicesStyles } from "../../styles/OurServicesStyles";

const OurServiceslist = [
  {
    id: OurServicesIconEnums.RESTAURANT,
    icon: (
      <RestaurantIcon
        fontSize="large"
        style={{
          transform: "rotate(-45deg)",
          fontSize: "5em",
          color: "purple",
        }}
      />
    ),
  },
  {
    id: OurServicesIconEnums.SOUPKITCHENICON,
    icon: (
      <SoupKitchenIcon
        fontSize="large"
        style={{
          transform: "rotate(-45deg)",
          fontSize: "5em",
          color: "orange",
        }}
      />
    ),
  },
  {
    id: OurServicesIconEnums.RESTAURANTMENUICON,
    icon: (
      <RestaurantMenuIcon
        style={{ transform: "rotate(-45deg)", fontSize: "5em", color: "blue" }}
      />
    ),
  },
  {
    id: OurServicesIconEnums.RAMENDININGICON,
    icon: (
      <RamenDiningIcon
        fontSize="large"
        style={{ transform: "rotate(-45deg)", fontSize: "5em", color: "red" }}
      />
    ),
  },
];

interface Iprops {
  OurServices: IOurServices[];
}

function OurServices(props: Iprops) {
  const { OurServices } = props;
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const classes = useOurServicesStyles();

  return (
   
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4" fontWeight={600}>
            Our Services
          </Typography>
        </Box>

        <Grid
          container
          xs={12}
          p={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: isDesktop ? 16 : 0,
          }}
        >
          {OurServices.map((services, index) => {
            const matchedIcon = OurServiceslist.find(
              (icon) => icon.id === services.iconkey
            );
            return (
              <Grid item key={index}>
                <Box className={classes.boxStyle}>
                  {matchedIcon && matchedIcon.icon}
                </Box>
                <Box
                  sx={{
                    paddingTop: 13,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{services.title}</Typography>
                  <Typography variant="body1">
                    {services.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
 
  );
}
export default OurServices;
