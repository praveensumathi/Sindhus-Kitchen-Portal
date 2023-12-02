import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ISelectedCateringProduct, IServingSizeWithQuantity } from "../../interface/types";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { sendCateringRequest } from "../../services/api";



interface IProps {
  open: boolean;
  onClose: () => void;
  productInfo: ISelectedCateringProduct[];
  productQuantities: IServingSizeWithQuantity[];
}

interface ICombinedProduct {
  productId: string;
  title: string;
  image: string;
  quantities: {
    size: string[];
    quantity: number[];
  }[];
}

function CateringRequestModel(props: IProps) {
  const { open, onClose, productInfo, productQuantities } = props;

   const [userData, setUserData] = useState({
     name: "",
     mobileNumber: "",
     eventDate: null, 
   });
    const [combinedProducts, setCombinedProducts] = useState<ICombinedProduct[]>([]);

  const handleChange = (field, value) => {
      setUserData((prevData) => ({ ...prevData, [field]: value }));
  };
  
  useEffect(() => {
    const combined: ICombinedProduct[] = productInfo.map((product) => {
      const matchingQuantities = productQuantities.filter(
        (item) => item.productId === product._id
      );

      return {
        productId: product._id,
        title: product.title,
        image: product.posterURL,
        quantities: matchingQuantities.map((item) => ({
          size: item.sizes.map((sizeInfo) => sizeInfo.size),
          quantity: item.sizes.map((sizeInfo) => sizeInfo.qty),
        })),
      };
    });

    setCombinedProducts(combined);
  }, [productInfo, productQuantities]);


  const handleSubmit = () => {
     sendCateringRequest(userData, combinedProducts);
     console.log("Submitted Data:", userData);
         console.log("Combined Products:", combinedProducts);
  };
  

  
  return (
    <Dialog open={open}>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "large" }}>
            Enter Your Details
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label="phoneNumber"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              format="dd-MM-yyyy"
              value={userData.eventDate}
              onChange={(date) => handleChange("eventDate", date)}
            />
          </LocalizationProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CateringRequestModel;
