import CloseIcon from "@mui/icons-material/Close";
import { ISelectedCateringProduct } from "../../interface/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  productInfo: ISelectedCateringProduct[];
}

function CateringSelectedProductDrawer(props: IProps) {
  const { isOpen, handleClose, productInfo } = props;

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
                    xs={6}
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
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontSize: "large",
                        fontWeight: 600,
                      }}
                    >
                      {product.title}
                    </Typography>
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
