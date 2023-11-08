import { Box, Typography, Container, Grid, Card } from "@mui/material";
import { IWhyChooseUs } from "../../interface/types";
import { whyChooseUsSytle } from "../../styles/WhyChooseUsStyle";
import { useTheme } from "@mui/material/styles";

interface Iprops {
  whyChooseUs: IWhyChooseUs[];
}

function WhyChooseUs(props: Iprops) {
  const { whyChooseUs } = props;

  const classes = whyChooseUsSytle();
  const theme = useTheme();

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
        <Typography variant="h4" fontWeight={"bold"} color={"primary"}>
          WHY SINDHU'S KITCHEN?
        </Typography>
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
      </Box>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {whyChooseUs.map((whychoose, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} py={1}>
              <Card
                className={classes.flipcard}
                sx={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
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
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default WhyChooseUs;
