import "./App.css";
import OurServices from "./pages/home/OurServices";
import { ourServicesData } from "./seed-data/seed-data";


function App() {
  return (
    <>
      <OurServices OurServices={ourServicesData}></OurServices>
    </>
  );
}

export default App;
