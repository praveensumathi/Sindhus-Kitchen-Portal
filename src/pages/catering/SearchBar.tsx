import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
  onSetCateringMenusLength(menuLength: number): void;
}

function SearchBar({
  onSelectMenu,
  onSelectProduct,
  onSetCateringMenusLength,
}: IProps) {
  const [cateringMenus, setCateringMenus] = useState<IMenuList[]>([]);
  const [productValue, setProductValue] = useState<IProductAutoComplete | null>(
    null
  );
  const [menuValue, setMenuValue] = useState<IMenuAutoComplete | null>(null);
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuClear, setIsMenuClear] = useState(false);

  const menuList = queryClient.getQueryData<IMenuList[]>(["menus"]);

  const { data: cateringProducts, refetch: refetchProductData } =
    useCateringfetchProductData(selectedMenuId, searchTerm);

  const clearSearch = async () => {
    onSelectMenu("");
    onSelectProduct("");
    setMenuValue(null);
    setProductValue(null);
    setSelectedMenuId("");
    setSearchTerm("");
    setIsMenuClear(true);
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
    onSetCateringMenusLength(cateringMenus.length);
  };

  useEffect(() => {
    if (
      (selectedMenuId && !searchTerm) ||
      (!selectedMenuId && searchTerm && searchTerm.length >= 3)
    ) {
      refetchProductData();
    }
    if (isMenuClear && !selectedMenuId) {
      refetchProductData();
    }
  }, [selectedMenuId, searchTerm, isMenuClear]);

  const handleProductSearch = (
    selectedProduct: IProductAutoComplete | null
  ) => {
    if (selectedProduct) {
      onSelectProduct(selectedProduct._id);
      setProductValue(selectedProduct);
    } else {
      setSelectedMenuId("");
    }
  };

  const handleMenuChange = (selectedMenu: IMenuAutoComplete | null) => {
    setSearchTerm("");

    if (selectedMenu) {
      if (menuValue?._id !== selectedMenu._id) {
        setProductValue(null);
        onSelectProduct("");
      }

      setSelectedMenuId(selectedMenu._id);
      onSelectMenu(selectedMenu._id);
      setMenuValue(selectedMenu);
    } else {
      setSelectedMenuId("");
      setProductValue(null);
    }
  };

  return (
    <>
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
            onInputChange={(_event, newInputValue, reason) => {
              if (!newInputValue.trim()) {
                setMenuValue(null);
                onSelectMenu("");
              }
              if (reason == "clear") {
                setIsMenuClear(true);
              }
            }}
            isOptionEqualToValue={(option, value) =>
              option.title == value.title
            }
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
            isOptionEqualToValue={(option, value) =>
              option.title == value.title
            }
            onChange={(_event, value) => handleProductSearch(value)}
            options={
              (searchTerm && !selectedMenuId
                ? cateringProducts?.map(
                    (item) =>
                      ({
                        ...item,
                        label: item.title,
                      } as IProductAutoComplete)
                  )
                : selectedMenuId
                ? cateringProducts?.map(
                    (item) =>
                      ({
                        ...item,
                        label: item.title,
                      } as IProductAutoComplete)
                  )
                : []) || []
            }
            onInputChange={(_event, newInputValue) => {
              setSearchTerm(newInputValue.trim());

              if (!newInputValue.trim()) {
                setProductValue(null);
                onSelectProduct("");
              }
            }}
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
              <TextField
                {...params}
                label="Select Food"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  onChange: (event) => {
                    const newSearchTerm = event.target.value;
                    setSearchTerm(newSearchTerm || "");
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Button variant="contained" fullWidth onClick={clearSearch}>
            Clear Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchBar;
