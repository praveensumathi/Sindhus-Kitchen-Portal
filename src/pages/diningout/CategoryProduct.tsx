import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import StoreIcon from "@mui/icons-material/Store";
import CommonProductCard from "../../common/component/CommonProductCard";
import { useParams } from "react-router-dom";
import { categoryWithProducts } from "../../seed-data/seed-data";

function CategoryProducts() {

  const params = useParams();
  // Find the category with the matching _id
  const selectedCategory = categoryWithProducts.find(
    (category) => category._id === params.categoryId
  );

  return (
    <>
      {selectedCategory && (
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
                image={selectedCategory?.image || ""}
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
              {selectedCategory.data || ""}
            </Typography>
          </Box>
        </Box>
      )}
      <Box>
        {selectedCategory && selectedCategory.products.length > 0 ? (
          <Container sx={{ padding: "10px" }}>
            <Grid container spacing={2}>
              {selectedCategory.products.map((product, index) => (
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
