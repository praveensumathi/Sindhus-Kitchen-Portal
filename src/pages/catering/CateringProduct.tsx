import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { cateringPage } from "../../seed-data/Seed-data";
import { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
      {cateringPage &&
        cateringPage.length > 0 &&
        cateringPage.map((item) => (
          <>
            <Typography
              sx={{
                textAlign: "center",
                color: "white",
                backgroundColor: "orange",
                m: 2,
                fontSize: "2rem",
                width: "100%",
              }}
            >
              {item.menuTitle}
            </Typography>

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
                    <TableContainer>
                      <Table aria-label="simple table" sx={{ minWidth: 320 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" sx={{ p: "5px" }}>
                              <strong>Serving Size(s)</strong>
                            </TableCell>
                            <TableCell align="center" sx={{ p: "5px" }}>
                              <strong>Quantity</strong>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {item.trayItems.map((trayItem) => (
                            <TableRow
                              key={trayItem.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                                sx={{
                                  whiteSpace: "pre-line",
                                }}
                              >
                                {trayItem.name}&nbsp;
                                <b>{trayItem.price}</b>
                              </TableCell>

                              <TableCell>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <ButtonGroup
                                    className="test"
                                    sx={{
                                      lineHeight: 1,
                                      padding: 0,
                                      "& .MuiButtonGroup-grouped": {
                                        minWidth: "32px",
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
                                      onClick={() =>
                                        handleDecrement(trayItem.name)
                                      }
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
                                      {trayQuantities[trayItem.name]}
                                    </Button>
                                    <Button
                                      onClick={() =>
                                        handleIncrement(trayItem.name)
                                      }
                                      sx={{
                                        lineHeight: 1.3,
                                      }}
                                    >
                                      +
                                    </Button>
                                  </ButtonGroup>
                                </Box>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
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
