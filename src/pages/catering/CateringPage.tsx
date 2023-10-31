import React from 'react'
import Container from "@mui/material/Container";
import SearchBar from './SearchBar';
import CateringProduct from './CateringProduct';

function CateringPage() {
  return (
    <Container sx={{ mt: 3 }}>
      <SearchBar />
      <CateringProduct/>
    </Container>
  );
}

export default CateringPage