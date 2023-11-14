import Container from "@mui/material/Container";
import Categories from "./Categories";
import Carousel from "../../common/component/Carousal";
import { usegetAllDiningOutProducts } from "../../customRQHooks/Hooks";
import Box from "@mui/material/Box";


function DiningOutPage() {

  const categoryWithProducts = usegetAllDiningOutProducts();
  
  return (
    <Container>
      <Categories />
      {categoryWithProducts.isSuccess &&
        categoryWithProducts.data.map((category, index) => (
          <Box key={index}>
            <Carousel category={category} />
          </Box>
        ))}
    </Container>
  );
}

export default DiningOutPage;
