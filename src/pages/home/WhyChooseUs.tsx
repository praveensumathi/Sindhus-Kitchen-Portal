import { Box, Typography, Container, Grid, Card } from "@mui/material";
import { IWhyChooseUs } from "../../interface/types";
import { whyChooseUsSytle } from "../../styles/WhyChooseUsStyle";

interface Iprops {
  WhyChooseUs: IWhyChooseUs[];
}

function WhyChooseUs(props: Iprops) {
  const { WhyChooseUs } = props;
  const classes = whyChooseUsSytle();

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <Typography variant="h4" fontWeight={600}>
          Why Sindhu's Kitchen?
        </Typography>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        {WhyChooseUs.map((whychoose, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} py={2}>
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
                          fontSize: "60px",
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
                  <Typography className={classes.flipCardBack}>
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
