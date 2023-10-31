import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import StoreIcon from "@mui/icons-material/Store";
import CommonProductCard from "../../common/component/CommonProductCard";
import { categoryWithProducts } from "../../seed-data/Seed-data";
import { ICategoryWithProducts } from "../../interface/types";


function CategoryProducts() {
      const [previousResponseData, setPreviousResponseData] = useState<
        ICategoryWithProducts[]
      >([]);

  
useEffect(() => {
  if (categoryWithProducts) {
    if (categoryWithProducts.length > 0) {
      setPreviousResponseData(
        
        categoryWithProducts
     );
    }
  }
}, [categoryWithProducts]);
  return (
    <>
      {previousResponseData && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          p={1}
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
                image={previousResponseData[0]?.image || ''} 
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
              {previousResponseData[0]?.data||''} 
            </Typography>
          </Box>
        </Box>
      )}
      <Box>
        {categoryWithProducts.length === 0 ? (
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
          categoryWithProducts.map((categoryData) => (
            <Container sx={{ padding: "10px" }} key={categoryData.data}>
              {categoryData.products && categoryData.products.length > 0 && (
                <Grid container spacing={2}>
                  {categoryData.products.map((product, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                      <CommonProductCard
                        title={product.title}
                        mrpprice={product.mrpprice}
                        offerprice={product.offerprice}
                        imageUrl={product.imageUrl}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Container>
          ))
        )}
      </Box>
    </>
  );
}

export default CategoryProducts;
