import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SnacksMenuItem from "./SnacksMenuItem";

function SnacksPage() {

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={3} sx={{display:"flex"}}>
        <Grid item xs>
          <img src="assets/images/sweets.jpg" alt="sweets" height="60px" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Sweets And Savouries</Typography>
        </Grid>
        <Grid item xs>
          <img
            src="assets/images/savouries.jpg"
            alt="savouries"
            height="60px"
          />
        </Grid>
      </Grid>
      <SnacksMenuItem></SnacksMenuItem>
    </Container>
  );
}

export default SnacksPage;
