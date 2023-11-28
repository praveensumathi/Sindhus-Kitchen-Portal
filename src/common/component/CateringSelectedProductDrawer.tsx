import {
  Box,
  Card,
  Drawer,
  CardMedia,
  Divider,
  Grid,
  Typography,
  IconButton,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ISelectedCateringProduct, IServingSizeWithQuantity } from "../../interface/types";

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  productInfo: ISelectedCateringProduct[];
  productQuantities: IServingSizeWithQuantity[]; 
}

function CateringSelectedProductDrawer(props: IProps) {
  const { isOpen, handleClose, productInfo, productQuantities } = props;
  console.log("productQuantities", productQuantities);

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      sx={{
        position: "relative",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "30vw",
        },
        "@media (max-width: 600px)": {
          "& .MuiDrawer-paper": {
            width: "100vw",
            height: "100%",
          },
        },
      }}
    >
      <Box>
        <Box
          sx={{
            zIndex: -1,
            padding: 2,
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Catering Products
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Container>
          {productInfo.map((product, index) => (
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
                        }}
                      >
                        {product.title}
                      </Typography>
                      {productQuantities
                        .filter((item) => item.productId === product._id)
                        .map((filteredItem) => (
                          <div key={filteredItem.productId}>
                            <TableContainer>
                              <Table sx={{ width: "50%" }}>
                                <TableHead>
                                  <TableRow>
                                    <TableCell style={{ padding: 1 }}>
                                      Size
                                    </TableCell>
                                    <TableCell style={{ padding: 1 }}>
                                      Quantity
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {filteredItem.sizes.map((sizeInfo) => (
                                    <TableRow key={sizeInfo.size}>
                                      <TableCell style={{ padding: 1 }}>
                                        {sizeInfo.size}
                                      </TableCell>
                                      <TableCell style={{ padding: 1 }}>
                                        {sizeInfo.qty}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </div>
                        ))}
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
        </Container>
      </Box>
    </Drawer>
  );
}

export default CateringSelectedProductDrawer;
