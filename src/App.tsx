import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { paths } from "./routes/path";
import Home from "./pages/home/Home";
import SnacksPage from "./pages/snacks/SnacksPage";
import CateringPage from "./pages/catering/CateringPage";
import DiningOutPage from "./pages/diningout/DiningOutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={paths.ROOT} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={paths.HOME} element={<Home />} />
            <Route path={paths.SNACKSPAGE} element={<SnacksPage />} />
            <Route path={paths.CATERINGPAGE} element={<CateringPage />} />
            <Route path={paths.DININGOUT} element={<DiningOutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
