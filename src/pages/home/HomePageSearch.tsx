import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import {
  homeSearchCityDropDown,
  homeSearchMenusDropDown,
} from "../../seed-data/Seed-data";

function HomePageSearch() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "70%",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <LocationOnIcon sx={{ color: "orange" }} />
        </IconButton>
        <Autocomplete
          disableClearable
          sx={{ width: "50%" }}
          options={homeSearchCityDropDown.map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Cities"
              InputProps={{
                ...params.InputProps,
                type: "search",
                disableUnderline: true,
              }}
              fullWidth
              variant="standard"
            />
          )}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ color: "#000" }} />
        </IconButton>
        <Autocomplete
          freeSolo
          disableClearable
          sx={{ width: "100%" }}
          options={homeSearchMenusDropDown}
          getOptionLabel={(option: any) => option.name}
          renderOption={(props, option) => (
            <li {...props} style={{ margin: "5px 0" }}>
              <img
                src={option.image}
                alt={option.name}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }} 
              />
              <Typography sx={{ fontWeight: "bolder" }}>
                {option.name}
              </Typography>
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search Your favorite snacks, food, etc..."
              InputProps={{
                ...params.InputProps,
                type: "search",
                disableUnderline: true,
              }}
              fullWidth
              variant="standard"
            />
          )}
        />
      </Paper>
    </Box>
  );
}

export default HomePageSearch;
