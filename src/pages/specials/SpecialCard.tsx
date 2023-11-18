import { Box, Container, Typography, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { ISpecials } from "../../interface/types";

interface Iprops {
  specials: ISpecials[];
}

function SpecialCard(props: Iprops) {
  const { specials } = props;

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
          <Typography variant="h4" fontWeight="bold" color="primary">
            Specials
          </Typography>
        </Fade>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        {specials.map((special, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Bounce left>
                <Card
                  sx={{
                    boxShadow: "6",
                    my: 5,
                    minwidth: "70%",
                  }}
                >
                  <CardMedia
                    component="img"
                    height={"70%"}
                    width={"100%"}
                    sx={{
                      backgroundSize: "cover",
                    }}
                    image={special.image}
                    title="green iguana"
                  />
                </Card>
              </Bounce>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default SpecialCard;
