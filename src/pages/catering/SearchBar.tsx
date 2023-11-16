
// import React, { useEffect } from "react";
// import Grid from "@mui/material/Grid";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import { Button ,Typography} from "@mui/material";
// import Container from "@mui/material/Container";
// import { IMenu, IMenuList, IPrice, IProduct } from "../../interface/types";
// import { MenuType } from "../../enums/MenuTypesEnum";
// import { queryClient } from "../../App";
// import { fetchProductByCateringMenu, getAllMenus } from "../../services/api";


// function SearchBar() {
//   const [cateringMenus, setCateringMenus] = React.useState<IMenuList[]>([]);
//   const menuList = queryClient.getQueryData<IMenuList[]>(["menus"]);
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const [selectedMenuId, setSelectedMenuId] = React.useState("");
  
//   const [cateringData, setCateringData] = React.useState<IMenu[]>([]);


//   React.useEffect(() => {
//     if (menuList) {
//       setFilteredCateringMenus(menuList);
//     } else {
//       refetchMenus();
//     }
//   }, [menuList]);

//   const refetchMenus = async () => {
//     const _menuList = await queryClient.fetchQuery(["menus"], getAllMenus);
//     setFilteredCateringMenus(_menuList);
//   };

//   const setFilteredCateringMenus = (menuList: IMenuList[]) => {
//     const filteredMenus = menuList.filter(
//       (menu) => menu.menuType === MenuType.OTHERS
//     );

//     setCateringMenus([...filteredMenus]);
//   };

//   const handleMenuChange = (_event, newValue: IMenuList) => {
//     const selectedMenu = cateringMenus.find((menu) => menu._id === newValue._id);
//     if (selectedMenu) {
//       setSelectedMenuId(selectedMenu._id);
//     }
  
//   }

//     const handleProductSearch = (event) => {
//       const newSearchTerm = event.target.value;
//       setSearchTerm(newSearchTerm || "");
//     };


//     useEffect(() => {
//       const fetchProducts = async () => {
//         if (selectedMenuId) {
//           try {
//             const products = await fetchProductByCateringMenu(
//               selectedMenuId,
//               searchTerm
//             );
       
//             setCateringData(products);
//           } catch (error) {
//             console.error("Error fetching products:", error);
//           }
//         }
//       };

//       fetchProducts();
//     }, [selectedMenuId, searchTerm]);

//     useEffect(() => {
//       console.log("Fetched Products:", cateringData);
//     }, [cateringData]);
  
//   const handleSearch = () => {
//     // Trigger fetching products with the updated searchTerm
//     fetchProducts();
//   };
//     return (
//       <Container>
//         <Grid container spacing={3}>
//           <Grid item xs={12} lg={4}>
//             <Autocomplete
//               id="category-autocomplete"
//               options={cateringMenus}
//               getOptionLabel={(option) => option.title}
//               onChange={(event, newValue) => {
//                 handleMenuChange(event, newValue!);
//               }}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Select Category"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} lg={5}>
//             <Autocomplete
//               id="food-autocomplete"
//               onChange={handleProductSearch}
//               options={cateringData.flatMap((menu) =>
//                 menu.products.map((product) => ({
//                   title: product.title,
//                   _id: product._id,
//                   posterURL: product.posterURL,
//                 }))
//               )}
//               // getOptionLabel={(product) => product.title}
//               renderOption={(props, option) => (
//                 <li
//                   {...props}
//                   style={{
//                     margin: "5px 0",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src={option.posterURL ?? ""}
//                     style={{
//                       width: "4rem",
//                       height: "4rem",
//                       borderRadius: "50%",
//                       marginRight: "10px",
//                     }}
//                   />
//                   <Typography
//                     sx={{
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {option.title}
//                   </Typography>
//                 </li>
//               )}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   placeholder="Search food"
//                   InputProps={{
//                     ...params.InputProps,
//                     disableUnderline: true,
//                   }}
//                   fullWidth
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             lg={3}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: "1rem",
//             }}
//           >
//             <Button fullWidth variant="contained" onClick={handleSearch}>
//               Search
//             </Button>
//             <Button fullWidth variant="outlined">
//               Clear Search
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     );
//   }
// export default SearchBar;

import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { IMenu, IMenuList } from "../../interface/types";
import { MenuType } from "../../enums/MenuTypesEnum";
import { queryClient } from "../../App";
import { fetchProductByCateringMenu, getAllMenus } from "../../services/api";

function SearchBar() {
  const [cateringMenus, setCateringMenus] = React.useState<IMenuList[]>([]);
  const menuList = queryClient.getQueryData<IMenuList[]>(["menus"]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedMenuId, setSelectedMenuId] = React.useState("");

  const [cateringData, setCateringData] = React.useState<IMenu[]>([]);

  React.useEffect(() => {
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
    const filteredMenus = menuList.filter(
      (menu) => menu.menuType === MenuType.OTHERS
    );

    setCateringMenus([...filteredMenus]);
  };

  const handleMenuChange = (_event, newValue: IMenuList) => {
    const selectedMenu = cateringMenus.find(
      (menu) => menu._id === newValue._id
    );
    if (selectedMenu) {
      setSelectedMenuId(selectedMenu._id);
    }
  };

  const handleProductSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm || "");
  };

  const fetchProducts= async () => {
    if (selectedMenuId) {
      try {
        const products = await fetchProductByCateringMenu(
          selectedMenuId,
          searchTerm
        );

        setCateringData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedMenuId, searchTerm]);

  useEffect(() => {
    console.log("Fetched Products:", cateringData);
  }, [cateringData]);

  const handleSearch = () => {
    fetchProducts(); 
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Autocomplete
            id="category-autocomplete"
            options={cateringMenus}
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => {
              handleMenuChange(event, newValue!);
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
            onChange={handleProductSearch}
            options={cateringData.flatMap((menu) =>
              menu.products.map((product) => ({
                title: product.title,
                _id: product._id,
                posterURL: product.posterURL,
              }))
            )}
            renderOption={(props, option) => (
              <li
                {...props}
                style={{
                  margin: "5px 0",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={option.posterURL ?? ""}
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {option.title}
                </Typography>
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search food"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                fullWidth
                variant="outlined"
              />
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
          <Button fullWidth variant="contained" onClick={handleSearch}>
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


