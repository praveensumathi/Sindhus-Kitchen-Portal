
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { fetchProductByCateringMenu } from "../../services/api";
import { IMenu } from "../../interface/types";

function CateringProduct() {
  const [trayQuantities, setTrayQuantities] = useState({
    SmallTray: 0,
    MediumTray: 0,
    LargeTray: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [product, setProducts] = useState<IMenu[]>([]);
  const [cateringData, setCateringData] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedMenuId) {
          const productsForSelectedMenu = await fetchProductByCateringMenu(
            selectedMenuId,""
           
          );
           console.log("products",selectedMenuId );
          setProducts(productsForSelectedMenu);
          console.log("products",setProducts)
        } else {
     
          const fetchedProducts = await fetchProductByCateringMenu("", "");
          setCateringData(fetchedProducts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedMenuId, searchTerm]);


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
      {cateringData &&
        cateringData.length > 0 &&
        cateringData.map((data) => (
          <Box key={data._id}>
            <Typography
              sx={{
                textAlign: "center",
                color: "white",
                backgroundColor: "orange",
                m: 2,
                fontSize: "2rem",
              }}
            >
              {data.menuTitle}
            </Typography>

            <Grid
              container
              spacing={3}
              sx={{
                borderBottom: "1px solid #FFD580",
                padding: "15px",
              }}
            >
              {cateringData[0].products.map((product) => (
                <Grid container item key={product._id}>
                  <Grid
                    item
                    xs={12}
                    lg={3}
                    sx={{
                      // borderBottom: "1px solid #FFD580",
                      padding: "15px",
                    }}
                  >
                    <img
                      src={product.posterURL}
                      width={150}
                      height={150}
                      alt={product.title}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={5}
                    sx={{
                      // borderBottom: "1px solid #FFD580",
                      padding: "15px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "600" }}>
                      {product.title}
                    </Typography>
                    <Typography
                      sx={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {product.description}
                      <br />
                      <br />
                      Serving sizes:
                      <br />
                      Small Tray - can eat 10 members,
                      <br />
                      Medium Tray - can eat 20 members,
                      <br />
                      Large Tray - can eat 30 members
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{
                      // borderBottom: "1px solid #FFD580",
                      padding: "15px",
                    }}
                  >
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
                          {product.servingSizesWithPrice.map((trayItem) => (
                            <TableRow
                              key={trayItem.size}
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
                                {trayItem.size}&nbsp;
                                <b>[${trayItem.price}]</b>
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
                                        handleDecrement(trayItem.size)
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
                                      {trayQuantities[trayItem.size]}
                                    </Button>
                                    <Button
                                      onClick={() =>
                                        handleIncrement(trayItem.size)
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
              ))}
            </Grid>
          </Box>
        ))}
    </Box>
  );
}

export default CateringProduct;

