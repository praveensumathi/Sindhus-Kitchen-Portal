import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { cateringPage } from "../../seed-data/Seed-data";
import { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

function CateringProduct() {
  const [trayQuantities, setTrayQuantities] = useState({
    HalfTray: 0,
    MediumTray: 0,
    FullTray: 0,
  });

  const handleDecrement = (trayItem) => {
    if (trayQuantities[trayItem] > 0) {
      setTrayQuantities({
        ...trayQuantities,
        [trayItem]: trayQuantities[trayItem] - 1,
      });
    }
  };

  const handleIncrement = (trayItem) => {
    setTrayQuantities({
      ...trayQuantities,
      [trayItem]: trayQuantities[trayItem] + 1,
    });
  };

  return (
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
        cateringPage.length > 0 &&
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
                    <Typography
                      sx={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Grid container item spacing={2}>
                  <Grid item>
                    <Typography>
                      <b>Serving Size(s):</b>
                    </Typography>
                    <ul>
                      {item.trayItems.map((trayItem) => (
                        <li key={trayItem}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              m: 1,
                            }}
                          >
                            <Typography variant="body1">{trayItem}</Typography>
                            <ButtonGroup
                              className="test"
                              sx={{
                                lineHeight: 1,
                                padding: 0,
                                "& .MuiButtonGroup-grouped": {
                                  minWidth: "25px",
                                },
                                marginLeft: "8px",
                              }}
                              size="small"
                              aria-label="small outlined button group"
                            >
                              <Button
                                color="primary"
                                sx={{
                                  lineHeight: 1,
                                  padding: 0,
                                  "& .MuiButtonGroup-grouped": {
                                    minWidth: "32px !important",
                                  },
                                }}
                                size="small"
                                aria-label="small outlined button group"
                                onClick={() => handleDecrement(trayItem)}
                              >
                                -
                              </Button>
                              <Button
                                sx={{
                                  lineHeight: 1.3,
                                  fontWeight: 600,
                                  color: "black !important",
                                }}
                                disabled
                              >
                                {trayQuantities[trayItem]}
                              </Button>
                              <Button
                                onClick={() => handleIncrement(trayItem)}
                                sx={{
                                  lineHeight: 1.3,
                                }}
                              >
                                +
                              </Button>
                            </ButtonGroup>
                          </Box>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}
    </Box>
  );
}

export default CateringProduct;
