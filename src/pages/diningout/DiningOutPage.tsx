import Container from "@mui/material/Container";
import Categories from "./Categories";
import Carousel from "../../common/component/Carousal";
import { useGetAllDiningOutProducts } from "../../customRQHooks/Hooks";
import { Box, Typography } from "@mui/material";

function DiningOutPage() {
  const categoryWithProducts = useGetAllDiningOutProducts();

  return (
    <>
      <Box sx={{ height: "200px", position: "relative" }}>
        <Box
          style={{
            backgroundImage: "url('assets/images/sssurf7.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "rotate(180deg)",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            top: 0,
          }}
        ></Box>
        <Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                color: "white",
                fontWeight: 600,
                fontSize: "2rem",
                pt: 3,
              }}
            >
              Dining Out
            </Typography>
        </Box>
      </Box>
      <Container>
        <Categories />
        {categoryWithProducts.isSuccess &&
          categoryWithProducts.data.map((category, index) => (
            <Box key={index}>
              <Carousel category={category} />
            </Box>
          ))}
      </Container>
    </>
  );
}

export default DiningOutPage;
