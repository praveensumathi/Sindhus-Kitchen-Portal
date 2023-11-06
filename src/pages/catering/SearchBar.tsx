import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { IMenuList } from "../../interface/types";
import { useEffect, useState } from "react";
import { usegetAllCateringMenus } from "../../customRQHooks/Hooks";

const foodOptions = [
  { label: "Food1" },
  { label: "Food2" },
  { label: "Food3" },
  { label: "Food4" },
  { label: "Food5" },
];

function SearchBar() {
  const [cateringmenus, setCateringMenus] = useState<IMenuList[]>([]);
  const { data: menuData, isLoading, isError } = usegetAllCateringMenus();

  useEffect(() => {
    if (!isLoading && !isError) {
      setCateringMenus(menuData);
      console.log(menuData);
    }
  }, [menuData, isLoading, isError]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Autocomplete
            id="category-autocomplete"
            options={cateringmenus}
            getOptionLabel={(option) => option.title}
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
            id="category-autocomplete"
            options={foodOptions}
            getOptionLabel={(option) => option.label}
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
