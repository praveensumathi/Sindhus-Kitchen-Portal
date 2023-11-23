import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import StoreIcon from "@mui/icons-material/Store";
import CommonProductCard from "../../common/component/CommonProductCard";
import { useParams } from "react-router-dom";
import { useGetFetchProductsByMenuId } from "../../customRQHooks/Hooks";

function CategoryProducts() {
  const { menuId } = useParams();

  const selectedCategory = useGetFetchProductsByMenuId(menuId ?? "");

  return (
    <>
      {selectedCategory && selectedCategory.data && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          p={2}
        >
          <Box
            sx={{
              paddingRight: 2,
            }}
          >
            <Card
              sx={{
                height: "80px",
                width: "80px",
                boxShadow: 3,
                borderRadius: "50%",
              }}
            >
              <CardMedia
                image={selectedCategory.data.image || ""}
                component={"img"}
                sx={{
                  height: "100%",
                }}
              />
            </Card>
          </Box>
          <Box
            sx={{
              padding: "6px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              variant="h5"
            >
              {selectedCategory.data.title || ""}
            </Typography>
          </Box>
        </Box>
      )}
      <Box>
        {selectedCategory.data &&
        selectedCategory.data.products &&
        selectedCategory.data.products.length > 0 ? (
          <Container sx={{ padding: "10px" }}>
            <Grid container spacing={2}>
              {selectedCategory.data.products.map((product, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CommonProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Container>
        ) : (
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
        )}
      </Box>
    </>
  );
}

export default CategoryProducts;
