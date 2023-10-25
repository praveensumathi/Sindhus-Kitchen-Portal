import OurServices from "./OurServices";
import HomePageSlicker from "./HomePageSlicker";
import { ourServicesData } from "../../seed-data/seed-data";
import { Box } from "@mui/material";

function Home() {
  return (
    <>
      <HomePageSlicker />
      <Box sx={{ backgroundColor: "#e6e7ee", py: 4 }}>
        <OurServices OurServices={ourServicesData} />
      </Box>
    </>
  );
}

export default Home;
