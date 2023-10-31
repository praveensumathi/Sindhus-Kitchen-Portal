import React from "react";
import Container from "@mui/material/Container";
import Categories from "./Categories";
import { productCardList } from "../../seed-data/Seed-data";
import CommonProductCard from "../../common/component/CommonProductCard";


function DiningOutPage() {
  return (
    <Container>
      <Categories />
        {productCardList.map((product) => (
          <CommonProductCard
            key={product.id}
            title={product.title}
            mrpprice={product.mrpprice}
            offerprice={product.offerprice}
            imageUrl={product.imageUrl}
          />
        ))}
    </Container>
  );
}

export default DiningOutPage;
