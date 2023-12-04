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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { sendCateringRequest } from "../../services/api";
import { SnackbarSeverityEnum } from "../../enums/SnackbarSeverityEnum";
import { useSnackBar } from "../../context/SnackBarContext";
import { Container } from "@mui/system";



interface IProps {
  open: boolean;
  onClose: () => void;
  productInfo: ISelectedCateringProduct[];
  productQuantities: IServingSizeWithQuantity[];
}

interface ICombinedProduct {
  productId: string;
  title: string;
  quantities: {
    size: string;
    quantity: number;
  }[];
}

function CateringRequestModel(props: IProps) {
  const { open, onClose, productInfo, productQuantities } = props;
    const { updateSnackBarState } = useSnackBar();


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
    const combined = productInfo.map((product) => {
      const matchingQuantities = productQuantities.filter(
        (item) => item.productId === product._id
      );

      const quantities = matchingQuantities
        .map((item) =>
          item.sizes.map((sizeInfo) => ({
            size: sizeInfo.size,
            quantity: sizeInfo.qty,
          }))
        )
        .flat();

      return {
        productId: product._id,
        title: product.title,
        quantities: quantities,
      };
    });

    setCombinedProducts(combined);
  }, [productInfo, productQuantities]);


 const handleSubmit = async () => {
   try {
     await sendCateringRequest(userData, combinedProducts);
      updateSnackBarState(
        true,
        "Request Send successfully",
        SnackbarSeverityEnum.SUCCESS
     );
     onClose();
   } catch (error) {
     updateSnackBarState(
       true,
       "Error while submitting the catering Request",
       SnackbarSeverityEnum.ERROR
     );
   }
 };
 const handleCancel = () => {
   setUserData({
     name: "",
     mobileNumber: "",
     eventDate: null,
   });

   onClose();
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
            sx={{ mt: 1 }}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label="phoneNumber"
            variant="outlined"
            fullWidth
            sx={{ mt: 1 }}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{ width: "100%", mt: 1 }}
              format="dd-MM-yyyy"
              value={userData.eventDate}
              onChange={(date) => handleChange("eventDate", date)}
            />
          </LocalizationProvider>
        </Box>
      </DialogContent>
      <Container sx={{ padding: 0, mb: 2 }}>
        <DialogActions>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            confirm
          </Button>
        </DialogActions>
      </Container>
    </Dialog>
  );
}

export default CateringRequestModel;
