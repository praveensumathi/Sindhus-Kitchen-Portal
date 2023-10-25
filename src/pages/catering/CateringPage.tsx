import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { cateringPage } from "../../seed-data/Seed-data";
import SearchBar from "./SearchBar";

function CateringPage() {
  return (
    <Container sx={{ mt: 3 }}>
      <SearchBar />
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            backgroundColor: "orange",
            m: 2,
            fontSize: "2rem",
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
                  borderBottom: "1px solid #FFD580",
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
                      <Typography>
                        <b>Serving sizes:</b>
                      </Typography>
                      <Typography>{item.halfTray}</Typography>
                      <Typography>{item.mediumTray}</Typography>
                      <Typography>{item.fullTray}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid container item spacing={2}>
                    <Grid item>
                      <Typography>
                        <b>Serving Size(s):</b>
                      </Typography>
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
