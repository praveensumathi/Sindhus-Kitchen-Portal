import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { fetchProductByCateringMenu, getProductInfo } from "../../services/api";
import {
  ICateringMenu,
  ISelectedCateringProduct,
  IServingSizeWithQuantity,
} from "../../interface/types";
import CateringSelectedProductDrawer from "../../common/component/CateringSelectedProductDrawer";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import NoProductsAvailable from "../../common/component/NoProductsAvailable";

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
  const [badgeContent, setBadgeContent] = useState(0);

  useEffect(() => {
    fetchProductsByCateringMenu(selectedMenuId, selectedProductId);
  }, [selectedMenuId, selectedProductId]);

  useEffect(() => {
    const ProductIds = new Set<string>();
    productQuantities.forEach((item) => {
      if (item.sizes.some((size) => size.qty > 0)) {
        ProductIds.add(item.productId);
      }
    });

    setBadgeContent(ProductIds.size);
  }, [productQuantities]);

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
      <Container>
        {cateringData.length === 0 ? (
          <NoProductsAvailable />
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

              <Grid container spacing={3}>
                {data.products &&
                  data.products.length > 0 &&
                  data.products.map((product, index) => (
                    <Grid
                      container
                      item
                      key={product._id}
                      sx={{
                        borderBottom:
                          index === data.products.length - 1
                            ? "none"
                            : "1px solid #FFD580",
                        padding: "15px",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        lg={3}
                        sx={{
                          padding: "15px",
                        }}
                      >
                        <Link
                          to={`/detail/${product._id}`}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <img
                            src={product.posterURL}
                            width={150}
                            height={150}
                            alt={product.title}
                            loading="lazy"
                          />
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        sx={{
                          padding: "20px",
                        }}
                      >
                        <Typography sx={{ fontWeight: "600" }}>
                          {product.title}
                        </Typography>

                        <Typography>{product.description}</Typography>

                        {product.servingSizeDescription && (
                          <Typography sx={{ mt: 2 }}>
                            <b>servingSizeDescription</b>
                            <Typography
                              sx={{
                                whiteSpace: "pre-line",
                              }}
                            >
                              {product.servingSizeDescription}
                            </Typography>
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        {product.servingSizesWithPrice &&
                          product.servingSizesWithPrice.length > 0 && (
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
                                  {product.servingSizesWithPrice.map(
                                    (trayItem) => (
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
                                                  productQuantities.length >
                                                    0 &&
                                                  productQuantities
                                                    .find(
                                                      (item) =>
                                                        item.productId ===
                                                        product._id
                                                    )
                                                    ?.sizes.find(
                                                      (size) =>
                                                        size.size ===
                                                        trayItem.size
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
                                    )
                                  )}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          )}
                      </Grid>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          ))
        )}
      </Container>

      {!!badgeContent && (
        <Box
          sx={{
            zIndex: 1,
            bottom: 20,
            left: "20px",
            position: "sticky",
            display: "flex",
            justifyContent: "flex-end",
            mx: 4,
            my: 5,
            transform: "all 0.2s",
          }}
        >
          <Fade bottom>
            <Badge badgeContent={badgeContent} color="primary">
              <LocalDiningOutlinedIcon
                sx={{
                  color: "white",
                  borderRadius: "50%",
                  backgroundColor: "black",
                  padding: "5px",
                  borderColor: "white",
                  boxShadow: "0 0 0 2px white, 0 0 0 4px black",
                  fontSize: "3rem",
                }}
              />
            </Badge>
          </Fade>
        </Box>
      )}

      <CateringSelectedProductDrawer
        isOpen={isDrawerOpen}
        handleClose={handleCloseModal}
        productInfo={productInfo}
      />
    </>
  );
}

export default CateringProduct;
