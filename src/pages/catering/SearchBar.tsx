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

function SearchBar() {
  const [cateringMenus, setCateringMenus] = useState<IMenuList[]>([]);
  const menuList = queryClient.getQueryData<IMenuList[]>(["menus"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [productTitles, setProductTitles] = useState<string[]>([]);
  const [isMenuSelected, setIsMenuSelected] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

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

  const { data: productData, refetch: refetchProductData } =
    usecateringfetchProductData(selectedMenuId, selectedProduct);

  useEffect(() => {
    const fetchData = async () => {
      if ((isMenuSelected || searchTerm.trim() !== "") && selectedMenuId) {
        refetchProductData();
      }
      if (productData) {
        const titles = productData.map((product) => product.title);
        setProductTitles(titles);
      }
    };
    fetchData();
  }, [searchTerm, selectedMenuId, isMenuSelected, productData]);

  const handleSearchTermChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm || "");
    setIsMenuSelected(false);
    // Set the selected product when the search term changes
    setSelectedProduct(newSearchTerm);
  };

  const handleMenuChange = (event, newValue) => {
    if (newValue) {
      const selectedMenu = cateringMenus.find(
        (menu) => menu.title === newValue
      );
      if (selectedMenu) {
        setSelectedMenuId(selectedMenu._id);
        setIsMenuSelected(true);
        setSelectedProduct("");
      }
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
            onChange={handleSearchTermChange}
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
