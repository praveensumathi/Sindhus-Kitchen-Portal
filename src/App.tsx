import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { paths } from "./routes/path";
import Home from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import SnackBarProvider from "./context/SnackBarContext";
import Loader from "./common/component/Loader";

export const queryClient = new QueryClient();

const SpecialsComponent = React.lazy(() => import("./pages/specials/Specials"));

const SnacksComponent = React.lazy(() => import("./pages/snacks/SnacksPage"));

const CateringComponent = React.lazy(
  () => import("./pages/catering/CateringPage")
);

const DiningOutComponent = React.lazy(
  () => import("./pages/diningout/DiningOutPage")
);

const ProductDetailComponent = React.lazy(
  () => import("./common/component/ProductDetail")
);

const CategoryProductComponent = React.lazy(
  () => import("./pages/diningout/CategoryProduct")
);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SnackBarProvider>
          <HashRouter>
            <Suspense fallback={<Loader showSuspendLoading={true} />}>
              <Routes>
                <Route path={paths.ROOT} element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path={paths.HOME} element={<Home />} />
                  <Route
                    path={paths.SPECIALS}
                    element={<SpecialsComponent />}
                  />
                  <Route path={paths.SNACKS} element={<SnacksComponent />} />
                  <Route
                    path={paths.CATERING}
                    element={<CateringComponent />}
                  />
                  <Route
                    path={paths.DININGOUT}
                    element={<DiningOutComponent />}
                  />
                  <Route
                    path={paths.PRODUCTDETAIL}
                    element={<ProductDetailComponent />}
                  />
                  <Route
                    path={paths.PRODUCTSBYCATEGORY}
                    element={<CategoryProductComponent />}
                  />
                </Route>
              </Routes>
            </Suspense>
          </HashRouter>
        </SnackBarProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
