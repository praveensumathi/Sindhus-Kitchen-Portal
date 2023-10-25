import React from "react";
import Container from "@mui/material/Container";
import OurServices from "./OurServices";
import { ourServicesData } from "../../seed-data/seed-data";
function Home() {
  return (
    <Container>
      <OurServices OurServices={ourServicesData} />
    </Container>
  );
}

export default Home;
