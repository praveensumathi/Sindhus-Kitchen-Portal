import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';



const categoryOptions = [
  { label: "Snacks" },
  { label: "BreakFast" },
  { label: "Veg Main Course" },
  { label: "Non-Veg Main Course" },
  { label: "Deserts" },
];
const foodOptions = [
  { label: "Food1" },
  { label: "Food2" },
  { label: "Food3" },
  { label: "Food4" },
  { label: "Food5" }
];


function SearchBar() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={4}>
        <Autocomplete
          id="category-autocomplete"
          options={categoryOptions}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} label="Select Category" variant="outlined" />
          )}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
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
        lg={2}
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Button variant="outlined">Search</Button>
        <Button variant="outlined">Clear</Button>
      </Grid>
    </Grid>
  );
}

export default SearchBar

