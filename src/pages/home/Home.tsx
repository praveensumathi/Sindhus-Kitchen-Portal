import Container from "@mui/material/Container";
import OurServices from "./OurServices";
import { ourServicesData } from "../../seed-data/seed-data";
import HomePageSlicker from "./HomePageSlicker";
function Home() {
  return (
    <>
      <HomePageSlicker/>
    <Container>
      <OurServices OurServices={ourServicesData} />
    </Container></>
  );
}

export default Home;
