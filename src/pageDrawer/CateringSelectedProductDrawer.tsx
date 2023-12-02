import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import {
  ISelectedCateringProduct,
  IServingSizeWithQuantity,
} from "../interface/types";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { Button } from "@mui/base";
import { useState } from "react";
import CateringRequestModel from "../common/component/CateringRequestModel";

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  productInfo: ISelectedCateringProduct[];
  productQuantities: IServingSizeWithQuantity[];
}

function CateringSelectedProductDrawer(props: IProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const theme = useTheme();
  const { isOpen, handleClose, productInfo, productQuantities } = props;

  const isBelowMediumSize = useMediaQuery(theme.breakpoints.down("md"));

  const handleSendNowClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      PaperProps={{
        sx: {
          width: isBelowMediumSize ? "100vw" : "30vw",
          height: "100vh",
        },
      }}
      sx={{
        position: "relative",
      }}
    >
      <>
        <Box
          sx={{
            padding: 2,
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Catering Request List
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Container>
          {productInfo.length > 0 &&
            productInfo.map((product, index) => (
              <Box
                my={1}
                key={index}
                sx={{
                  borderBottom:
                    index === productInfo.length - 1
                      ? "none"
                      : "1px solid #eeeeee",
                }}
              >
                <Card
                  sx={{
                    height: "8rem",
                  }}
                  elevation={0}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Grid
                      item
                      xs={4}
                      sx={{
                        padding: "15px",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "100px",
                          height: "100px",
                        }}
                        image={product.posterURL}
                        component={"img"}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "large",
                            fontWeight: 600,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {product.title}
                        </Typography>
                        {productQuantities.length > 0 &&
                          productQuantities.map(
                            (item) =>
                              item.productId === product._id && (
                                <Box key={item.productId}>
                                  <TableContainer>
                                    <Table sx={{ width: "80%" }}>
                                      <TableHead>
                                        <TableRow>
                                          <TableCell
                                            style={{
                                              padding: 1,
                                            }}
                                          >
                                            Size
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: 1,
                                            }}
                                          >
                                            Quantity
                                          </TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {item.sizes.map((sizeInfo) => (
                                          <TableRow key={sizeInfo.size}>
                                            <TableCell
                                              style={{
                                                padding: 1,
                                              }}
                                            >
                                              {sizeInfo.size}
                                            </TableCell>
                                            <TableCell
                                              style={{
                                                padding: 1,
                                              }}
                                            >
                                              {sizeInfo.qty}
                                            </TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                </Box>
                              )
                          )}
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            ))}
        </Container>
      </>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          bottom: 10,
        }}
      >
        <Button onClick={handleSendNowClick}>Send Now</Button>
      </Box>
      <CateringRequestModel
        open={isPopupOpen}
        onClose={handlePopupClose}
        productInfo={productInfo}
        productQuantities={productQuantities}
      />
    </Drawer>
  );
}

export default CateringSelectedProductDrawer;
