import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { fetchProductByCateringMenu, getProductInfo } from "../../services/api";
import {
  ICateringMenu,
  ISelectedCateringProduct,
  IServingSizeWithQuantity,
} from "../../interface/types";
import CateringSelectedProductModel from "../../common/component/CateringSelectedProductDrawer";

interface IProps {
  selectedMenuId: string;
  selectedProductId: string;
}

function CateringProduct({ selectedMenuId, selectedProductId }: IProps) {
  const [cateringData, setCateringData] = useState<ICateringMenu[]>([]);
  const [productQuantities, setProductQuantities] = useState<
    IServingSizeWithQuantity[]
  >([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [productInfo, setProductInfo] = useState<ISelectedCateringProduct[]>(
    []
  );

  useEffect(() => {
    fetchProductsByCateringMenu(selectedMenuId, selectedProductId);
  }, [selectedMenuId, selectedProductId]);

  const handleDecrement = (productId, trayItem) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      const productIndex = updatedQuantities.findIndex(
        (item) => item.productId === productId
      );

      if (productIndex === -1) {
        updatedQuantities.push({
          productId,
          sizes: [{ size: trayItem, qty: Math.max(0, 0) }],
        });
      } else {
        const existingSizes = updatedQuantities[productIndex].sizes;
        const sizeIndex = existingSizes.findIndex(
          (size) => size.size === trayItem
        );

        if (sizeIndex === -1) {
          existingSizes.push({ size: trayItem, qty: Math.max(0, 0) });
        } else {
          existingSizes[sizeIndex].qty = Math.max(
            existingSizes[sizeIndex].qty - 1,
            0
          );
        }
      }

      return updatedQuantities;
    });
  };

  const handleIncrement = (productId, trayItem) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      const productIndex = updatedQuantities.findIndex(
        (item) => item.productId === productId
      );

      if (productIndex === -1) {
        updatedQuantities.push({
          productId,
          sizes: [{ size: trayItem, qty: 1 }],
        });
      } else {
        const existingSizes = updatedQuantities[productIndex].sizes;
        const sizeIndex = existingSizes.findIndex(
          (size) => size.size === trayItem
        );

        if (sizeIndex === -1) {
          existingSizes.push({ size: trayItem, qty: 1 });
        } else {
          existingSizes[sizeIndex].qty = existingSizes[sizeIndex].qty + 1;
        }
      }

      return updatedQuantities;
    });
  };

  const fetchProductsByCateringMenu = async (
    menuId: string,
    productId: string
  ) => {
    try {
      const selectedProduct = await fetchProductByCateringMenu(
        menuId,
        productId
      );
      const updatedCateringData = Array.isArray(selectedProduct)
        ? selectedProduct
        : [selectedProduct];

      setCateringData(updatedCateringData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const product = productQuantities.map((item) => item.productId);
      const response = await getProductInfo(product);
      setProductInfo(response);
      setDrawerOpen(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleCloseModal = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <>
        <Box>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
        {cateringData.length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{
              height: "60vh",
              overflow: "hidden",
            }}
          >
            <StoreIcon sx={{ fontSize: "5rem", opacity: 0.5 }}></StoreIcon>
            <Typography sx={{ opacity: 0.5 }}>No products available</Typography>
          </Box>
        ) : (
          cateringData &&
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
                        padding: "12px",
                      }}
                    >
                      <TableContainer>
                        <Table aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">
                                <strong>Serving Size(s)</strong>
                              </TableCell>
                              <TableCell align="center">
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
                                        {(productQuantities &&
                                          productQuantities.length > 0 &&
                                          productQuantities
                                            .find(
                                              (item) =>
                                                item.productId === product._id
                                            )
                                            ?.sizes.find(
                                              (size) =>
                                                size.size === trayItem.size
                                            )?.qty) ||
                                          0}
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
          ))
        )}
      </>

      <CateringSelectedProductModel
        isOpen={isDrawerOpen}
        handleClose={handleCloseModal}
        productInfo={productInfo}
      />
    </>
  );
}

export default CateringProduct;
