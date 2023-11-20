import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { paths } from "./routes/path";
import Home from "./pages/home/Home";
import SnacksPage from "./pages/snacks/SnacksPage";
import CateringPage from "./pages/catering/CateringPage";
import DiningOutPage from "./pages/diningout/DiningOutPage";
import ProductDetail from "./common/component/ProductDetail";
import CategoryProducts from "./pages/diningout/CategoryProduct";
import Specials from "./pages/specials/Specials";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SnackBarProvider from "./context/SnackBarContext";
import CustomSnackBar from "./common/CustomSnackBar";

export const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SnackBarProvider>
          <HashRouter>
            <Routes>
              <Route path={paths.ROOT} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={paths.HOME} element={<Home />} />
                <Route path={paths.SPECIALS} element={<Specials />} />
                <Route path={paths.SNACKS} element={<SnacksPage />} />
                <Route path={paths.CATERING} element={<CateringPage />} />
                <Route path={paths.DININGOUT} element={<DiningOutPage />} />
                <Route path={paths.PRODUCTDETAIL} element={<ProductDetail />} />
                <Route
                  path={paths.PRODUCTSBYCATEGORY}
                  element={<CategoryProducts />}
                />
              </Route>
            </Routes>
          </HashRouter>
          <ReactQueryDevtools initialIsOpen={false} />
          <CustomSnackBar />
        </SnackBarProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
