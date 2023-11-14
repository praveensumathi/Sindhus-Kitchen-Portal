import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { IWhyChooseUs } from "../../interface/types";
import { whyChooseUsSytle } from "../../styles/WhyChooseUsStyle";
import { useTheme } from "@mui/material/styles";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

interface Iprops {
  whyChooseUs: IWhyChooseUs[];
}

function WhyChooseUs(props: Iprops) {
  const { whyChooseUs } = props;
  const classes = whyChooseUsSytle();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          p: 3,
          textAlign: "center",
        }}
      >
        <Fade right>
          <Typography variant="h4" fontWeight={"bold"} color={"primary"}>
            WHY SINDHU'S KITCHEN?
          </Typography>
        </Fade>
        <Fade left>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            sx={{ opacity: 0.7 }}
            mt={2}
          >
            We make our food as if we are cooking for our family because that is
            exactly what we are doing !
            <br />
            <Box
              component={"span"}
              sx={{
                color: `orange`,
                opacity: 1,
              }}
            >
              Welcome to Sindhu’s Kitchen
            </Box>
          </Typography>
        </Fade>
      </Box>

      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {whyChooseUs.map((whychoose, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} py={1}>
              <Bounce bottom>
                <Card
                  className={classes.flipcard}
                  elevation={0}
                >
                  <Box className={classes.flipCardInner}>
                    <Box
                      className={classes.flipCardFront}
                      style={{
                        backgroundImage: `url(${whychoose.image})`,
                      }}
                    >
                      <Box
                        className={`${classes.overlay} ${classes.centerImage}`}
                      >
                        <Box
                          sx={{
                            fontSize: "6rem",
                          }}
                          className={classes.imageWithBorder}
                        >
                          {whychoose.imageicon}
                        </Box>

                        <Typography gutterBottom variant="h5" fontWeight={500}>
                          {whychoose.title}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="h5"
                      p={2}
                      className={classes.flipCardBack}
                    >
                      {whychoose.description}
                    </Typography>
                  </Box>
                </Card>
              </Bounce>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default WhyChooseUs;
