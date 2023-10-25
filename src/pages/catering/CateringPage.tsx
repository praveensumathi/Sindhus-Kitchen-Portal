import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { cateringPage } from "../../seed-data/seed-data";

function CateringPage() {
  return (
    <Container sx={{ mt: 2 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "white",
            backgroundColor: "orange",
            m: 2,
          }}
        >
          NORTH INDIAN SPECIAL
        </Typography>
        {cateringPage &&
          cateringPage.map((item) => (
            <>
              <Grid
                container
                spacing={3}
                sx={{
                  borderBottom: "1px solid #ccc",
                  padding: "15px",
                }}
              >
                <Grid
                  item
                  xs={12}
                  lg={3}
                  key={item.id}
                  sx={{ textAlign: "center" }}
                >
                  <img
                    alt={item.title}
                    src={item.image}
                    width={230}
                    height={230}
                  ></img>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Grid container item direction="column" spacing={2}>
                    <Grid item>
                      <Typography variant="h5">
                        <b>{item.title}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{item.description}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>Serving sizes:</Typography>
                      <Typography>{item.halfTray}</Typography>
                      <Typography>{item.mediumTray}</Typography>
                      <Typography>{item.fullTray}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid
                    container
                    item
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid item>
                      <Typography>Serving Size(s):</Typography>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <>
                              <Typography variant="body1">
                                Half Tray <b>[$80.00]</b>
                              </Typography>
                            </>
                          }
                        />

                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <>
                              <Typography variant="body1">
                                Medium Tray <b>[$100.00]</b>
                              </Typography>
                            </>
                          }
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <>
                              <Typography variant="body1">
                                Full Tray <b>[$180.00]</b>
                              </Typography>
                            </>
                          }
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ))}
      </Box>
    </Container>
  );
}

export default CateringPage;
