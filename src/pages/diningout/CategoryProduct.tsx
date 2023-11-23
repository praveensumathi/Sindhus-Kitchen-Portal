import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import StoreIcon from "@mui/icons-material/Store";
import CommonProductCard from "../../common/component/CommonProductCard";
import { useParams, useNavigate } from "react-router-dom";
import { useGetFetchProductsByMenuId } from "../../customRQHooks/Hooks";

import { Container, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CategoryProducts() {
  const { menuId } = useParams();
  const navigate = useNavigate();

  const selectedCategory = useGetFetchProductsByMenuId(menuId ?? "");

  return (
    <Container>
      <IconButton
        sx={{
          float: "left",
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
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
      <Box sx={{ paddingBottom: "24px" }}>
        {selectedCategory.data &&
        selectedCategory.data.products &&
        selectedCategory.data.products.length > 0 ? (
          <Grid container spacing={3}>
            {selectedCategory.data.products.map((product, index) => (
              <Grid item key={index} xs={6} sm={4} lg={3}>
                <CommonProductCard product={product} />
              </Grid>
            ))}
          </Grid>
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
    </Container>
  );
}

export default CategoryProducts;
