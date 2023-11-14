import Container from "@mui/material/Container";
import Categories from "./Categories";
import { categoryWithProducts } from "../../seed-data/seed-data";
import Carousel from "../../common/component/Carousal";

function DiningOutPage() {
  return (
    <Container>
      <Categories />
      {categoryWithProducts.map((category) => (
        <Carousel category={category} />
      ))}
    </Container>
  );
}

export default DiningOutPage;
