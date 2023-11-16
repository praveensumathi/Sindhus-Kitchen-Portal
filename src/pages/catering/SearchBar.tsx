import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { IMenuList } from "../../interface/types";
import { useEffect, useState } from "react";
import { MenuType } from "../../enums/MenuTypesEnum";
import { queryClient } from "../../App";
import { getAllMenus } from "../../services/api";
import { usecateringfetchProductData } from "../../customRQHooks/Hooks";

function SearchBar({ onSelectMenu, onSelectProduct }) {
  const [cateringMenus, setCateringMenus] = useState<IMenuList[]>([]);
  const menuList = queryClient.getQueryData<IMenuList[]>(["menus"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [productTitles, setProductTitles] = useState<string[]>([]);

  useEffect(() => {
    if (menuList) {
      setFilteredCateringMenus(menuList);
    } else {
      refetchMenus();
    }
  }, [menuList]);

  const refetchMenus = async () => {
    const _menuList = await queryClient.fetchQuery(["menus"], getAllMenus);
    setFilteredCateringMenus(_menuList);
  };

  const setFilteredCateringMenus = (menuList: IMenuList[]) => {
    var filteredMenus = menuList.filter(
      (menu) => menu.menuType == MenuType.OTHERS
    );

    setCateringMenus([...filteredMenus]);
  };

  const { data: cateringData, refetch: refetchProductData } =
    usecateringfetchProductData(selectedMenuId, searchTerm);

  useEffect(() => {
    if (selectedMenuId) {
      refetchProductData();
    }
  }, [selectedMenuId]);

  useEffect(() => {
    if (cateringData && cateringData.length > 0) {
      const titles = cateringData.map((product) => product.title);
      setProductTitles(titles);
    } else {
      setProductTitles([]);
    }
  }, [cateringData]);

  // const handleProductSearch = (event) => {
  //   const newSearchTerm = event.target.value;
  //   setSearchTerm(newSearchTerm || "");
  //   onSelectProduct(newSearchTerm);
  // };

  const handleProductSearch = (event, newValue) => {
    if (cateringData && cateringData.length > 0) {
      console.log("cateringData:", cateringData);

      const selectedProduct = cateringData.find(
        (product) => product.title === newValue
      );

      if (selectedProduct) {
        console.log("Selected Product:", selectedProduct);

        onSelectProduct(selectedProduct._id);
      } else {
        console.warn("Selected product not found in cateringData.");
      }
    } else {
      console.warn("cateringData is not defined or is empty.");
    }
  };

  const handleMenuChange = async (event, newValue) => {
    const selectedMenu = cateringMenus.find((menu) => menu.title === newValue);
    if (selectedMenu) {
      setSelectedMenuId(selectedMenu._id);
      onSelectMenu(selectedMenu._id);
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Autocomplete
            id="category-autocomplete"
            options={cateringMenus.map((option) => option.title)}
            onChange={(event, newValue) => {
              handleMenuChange(event, newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Category"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Autocomplete
            id="food-autocomplete"
            value={searchTerm}
            onChange={handleProductSearch}
            options={productTitles}
            renderInput={(params) => (
              <TextField {...params} label="Select Food" variant="outlined" />
            )}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Button fullWidth variant="contained">
            Search
          </Button>
          <Button fullWidth variant="outlined">
            Clear Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchBar;
