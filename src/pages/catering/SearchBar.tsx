import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import {
  IMenuAutoComplete,
  IMenuList,
  IProductAutoComplete,
} from "../../interface/types";
import { useEffect, useState } from "react";
import { MenuType } from "../../enums/MenuTypesEnum";
import { queryClient } from "../../App";
import { getAllMenus } from "../../services/api";
import { useCateringfetchProductData } from "../../customRQHooks/Hooks";

interface IProps {
  onSelectMenu(menuId: string): void;
  onSelectProduct(productId: string): void;
}

function SearchBar({ onSelectMenu, onSelectProduct }: IProps) {
  const [cateringMenus, setCateringMenus] = useState<IMenuList[]>([]);
  const [productValue, setProductValue] = useState<IProductAutoComplete | null>(
    null
  );
  const [menuValue, setMenuValue] = useState<IMenuAutoComplete | null>(null);
  const [selectedMenuId, setSelectedMenuId] = useState("");

  const menuList = queryClient.getQueryData<IMenuList[]>(["menus"]);
  const { data: cateringProducts = [], refetch: refetchProductData } =
    useCateringfetchProductData(selectedMenuId, productValue?.title ?? "");

  const clearSearch = async () => {
    onSelectMenu("");
    onSelectProduct("");
    setMenuValue(null);
    setProductValue(null);
  };

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

  useEffect(() => {
    if (selectedMenuId) {
      refetchProductData();
    }
  }, [selectedMenuId]);

  const handleProductSearch = (
    selectedProduct: IProductAutoComplete | null
  ) => {
    if (selectedProduct) {
      onSelectProduct(selectedProduct._id);
    }
  };

  const handleMenuChange = (selectedMenu: IMenuAutoComplete | null) => {
    if (selectedMenu) {
      if (menuValue?._id != selectedMenu._id) {
        setProductValue(null);
        onSelectProduct("");
      }
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
            value={menuValue}
            getOptionLabel={(option) => option.label}
            options={cateringMenus.map(
              (item) =>
                ({
                  ...item,
                  label: item.title,
                } as IMenuAutoComplete)
            )}
            onChange={(_event, value) => handleMenuChange(value)}
            renderInput={(params) => (
              <TextField {...params} label="Select Menu" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Autocomplete
            id="food-autocomplete"
            value={productValue}
            getOptionLabel={(option) => option.label}
            onChange={(_event, value) => handleProductSearch(value)}
            options={cateringProducts.map(
              (item) =>
                ({
                  ...item,
                  label: item.title,
                } as IProductAutoComplete)
            )}
            renderOption={(props, option) => (
              <li {...props}>
                <img
                  src={option.posterURL ?? ""}
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                {option.title}
              </li>
            )}
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
          <Button variant="contained" onClick={clearSearch}>
            Clear Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchBar;
