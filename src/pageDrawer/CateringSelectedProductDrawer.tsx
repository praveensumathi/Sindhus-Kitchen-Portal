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

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  productInfo: ISelectedCateringProduct[];
  productQuantities: IServingSizeWithQuantity[];
}

function CateringSelectedProductDrawer(props: IProps) {
  const { isOpen, handleClose, productInfo, productQuantities } = props;

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      sx={{
        position: "relative",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "30vw",
          height: "100vh",
        },
        "@media (max-width: 600px)": {
          "& .MuiDrawer-paper": {
            width: "100vw",
            height: "100vh",
          },
        },
      }}
    >
      <Box>
        <Box
          sx={{
            zIndex: 1,
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
                      {productQuantities.map((item) => {
                        if (item.productId === product._id) {
                          return (
                            <div key={item.productId}>
                              <TableContainer>
                                <Table sx={{ width: "80%" }}>
                                  <TableHead>
                                    <TableRow>
                                      <TableCell
                                        style={{
                                          padding: 1,
                                          textAlign: "center",
                                        }}
                                      >
                                        Size
                                      </TableCell>
                                      <TableCell
                                        style={{
                                          padding: 1,
                                          textAlign: "center",
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
                                            textAlign: "center",
                                          }}
                                        >
                                          {sizeInfo.size}
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            padding: 1,
                                            textAlign: "center",
                                          }}
                                        >
                                          {sizeInfo.qty}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </div>
                          );
                        }
                        return null;
                      })}
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
