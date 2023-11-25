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
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ISelectedCateringProduct } from "../../interface/types";

// Corrected component name and removed the equal sign

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
          width: "25vw",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
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
            <Box my={1} key={index}>
              <Card
                sx={{
                  height: "10rem",
                }}
                elevation={0}
              >
                <Grid container spacing={2} sx={{display:"flex",justifyContent:"space-between"}}>
                  <Grid
                    item
                    xs={8}
                    sx={{
                      padding: "15px",
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: "150px",
                        height: "150px",
                      }}
                      image={product.posterURL}
                      component={"img"}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        fontSize: "small",
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
};

export default CateringSelectedProductDrawer;
