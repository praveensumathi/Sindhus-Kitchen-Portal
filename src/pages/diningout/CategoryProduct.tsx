import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CommonProductCard from "../../common/component/CommonProductCard";
import { useParams, useNavigate } from "react-router-dom";
import { useGetFetchProductsByMenuId } from "../../customRQHooks/Hooks";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NoProductsAvailable from "../../common/component/NoProductsAvailable";

function CategoryProducts() {
  const { menuId } = useParams();
  const navigate = useNavigate();

  const selectedCategory = useGetFetchProductsByMenuId(menuId ?? "");
  console.log("selectedCategory", selectedCategory);

  return (
    <>
      <Container>
        {selectedCategory && selectedCategory.data && (
          <>
            <Box
              sx={{
                display: "flex",
                position: "sticky",
                top: {
                  xs: "60px",
                  sm: "75px",
                },
                left: {
                  xs: "20px",
                  sm: "130px",
                },
                zIndex: 1000,
                right: 0,
                width: "100%",
                backgroundColor: "white",
                height: "80px",
              }}
            >
              <Box
                sx={{
                  paddingRight: 2,
                  width: "100px",
                }}
              >
                <IconButton
                  sx={{
                    float: "left",
                    display: "flex",
                    height: "100px",
                    width: {
                      xs: "20px",
                      sm: "100px",
                    },
                    padding: "3px",
                  }}
                  onClick={() => navigate(-1)}
                >
                  <ArrowBackIcon fontSize="medium" />
                </IconButton>
              </Box>

              <Box
                sx={{
                  padding: "30px",
                  width: "100%",
                  height: "70px",
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
          </>
        )}
        <Box>
          {selectedCategory.data &&
          selectedCategory.data.products &&
          selectedCategory.data.products.length > 0 ? (
            <Container sx={{ padding: "20px", mt: 2, zIndex: -1 }}>
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
            <NoProductsAvailable />
          )}
        </Box>
      </Container>
    </>
  );
}

export default CategoryProducts;
