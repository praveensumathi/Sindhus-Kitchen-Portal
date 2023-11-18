import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
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
import { ICateringMenu } from "../../interface/types";

function CateringProduct({ selectedMenuId, selectedProductId }) {
  const [cateringData, setCateringData] = useState<ICateringMenu[]>([]);
  const [productQuantities, setProductQuantities] = useState<{
    [productId: string]: { [trayItem: string]: number };
  }>({});

  const handleDecrement = (productId, trayItem) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: {
        ...prevQuantities[productId],
        [trayItem]: Math.max(
          (prevQuantities[productId]?.[trayItem] || 0) - 1,
          0
        ),
      },
    }));
  };

  const handleIncrement = (productId, trayItem) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: {
        ...prevQuantities[productId],
        [trayItem]: (prevQuantities[productId]?.[trayItem] || 0) + 1,
      },
    }));
  };

  const fetchProductsByCateingMenu = async (menuId: any, productId?: any) => {
    try {
      const selectedProduct = await fetchProductByCateringMenu(
        menuId,
        productId
      );
      setCateringData(selectedProduct);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAllCateringProducts = async () => {
    try {
      const allProducts = await fetchProductByCateringMenu();
      setCateringData(allProducts);
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  };

  useEffect(() => {
    if (selectedMenuId) {
      if (selectedProductId) {
        fetchProductsByCateingMenu(selectedMenuId, selectedProductId);
      } else {
        fetchProductsByCateingMenu(selectedMenuId);
      }
    } else {
      fetchAllCateringProducts();
    }
  }, [selectedMenuId, selectedProductId]);

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
              {data.products.map((product) => (
                <Grid container item key={product._id}>
                  <Grid
                    item
                    xs={12}
                    lg={3}
                    sx={{
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
                                        handleDecrement(
                                          product._id,
                                          trayItem.size
                                        )
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
                                      {productQuantities[product._id]?.[
                                        trayItem.size
                                      ] || 0}
                                    </Button>
                                    <Button
                                      onClick={() =>
                                        handleIncrement(
                                          product._id,
                                          trayItem.size
                                        )
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
