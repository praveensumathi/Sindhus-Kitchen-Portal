import { Box ,Container,Typography,Grid} from "@mui/material";
import Card from "@mui/material/Card";
import Fade from "react-reveal/Fade";
import { ISpeicals } from "../../interface/types";

interface Iprops {
specials: ISpeicals[];
}
function Specials(props: Iprops) {
  const { specials} = props;
  
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
            Specials
          </Typography>
        </Fade>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        {specials.map((special, index) => {
          return (
            <Grid item key={index}>
            <Card sx={{ maxWidth: 345 }}>
              {special.image}
              </Card>
              </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Specials;
