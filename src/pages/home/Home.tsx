import OurServices from "./OurServices";
import HomePageSlicker from "./HomePageSlicker";
import { Box } from "@mui/material";
import { WhyChooseUsData, ourServicesData } from "../../seed-data/Seed-data";
import  WhyChooseUs  from "./WhyChooseUs";

function Home() {
  return (
    <>
      <HomePageSlicker />
    
        <WhyChooseUs WhyChooseUs={WhyChooseUsData} />
     
      <Box sx={{ backgroundColor: "#e6e7ee", py: 4 }}>
        <OurServices OurServices={ourServicesData} />
      </Box>
    </>
  );
}

export default Home;
