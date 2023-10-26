import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CommonProductCard from "../../common/component/CommonProductCard";
import { productCardList } from "../../seed-data/seed-data";

function SnacksPage() {
  return (
    <Container>
      <Box my={4}>
        {productCardList.map((product) => (
          <CommonProductCard
            key={product.id}
            title={product.title}
            mrpprice={product.mrpprice}
            offerprice={product.offerprice}
            imageUrl={product.imageUrl}
          />
        ))}
      </Box>
    </Container>
  );
}

export default SnacksPage;
