import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  ICateringRequest,
  ISelectedCateringProduct,
  IServingSizeWithQuantity,
} from "../../interface/types";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { sendCateringRequest } from "../../services/api";
import { SnackbarSeverityEnum } from "../../enums/SnackbarSeverityEnum";
import { useSnackBar } from "../../context/SnackBarContext";
import { Container } from "@mui/system";
import * as yup from "yup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";

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
const RequestFormInitialValue: ICateringRequest = {
  name: "",
  mobileNumber: "",
  eventDate: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobileNumber: yup
    .string()
    .required()
    .typeError("Please enter the MobileNumber")
    .matches(/^[0-9]{10}$/, "Please enter a valid MobileNumber"),
  eventDate: yup.string().required("Event date is required"),
});

function CateringRequestModel(props: IProps) {
  const { open, onClose, productInfo, productQuantities } = props;
  const { updateSnackBarState } = useSnackBar();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    reset,
  } = useForm<ICateringRequest>({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: RequestFormInitialValue,
  });

  const [combinedProducts, setCombinedProducts] = useState<ICombinedProduct[]>(
    []
  );

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

  const onSubmitCateringRequest = async (data) => {
    try {
      await sendCateringRequest(data, combinedProducts);
      updateSnackBarState(
        true,
        "Request Send successfully",
        SnackbarSeverityEnum.SUCCESS
      );
      onClose();
      reset();
    } catch (error) {
      updateSnackBarState(
        true,
        "Error while submitting the catering Request",
        SnackbarSeverityEnum.ERROR
      );
    }
  };
  const handleCancel = () => {
    reset(), onClose();
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
          <IconButton onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmitCateringRequest)}>
        <DialogContent>
          <Box>
            <TextField
              sx={{ mb: 1 }}
              label="name *"
              fullWidth
              variant="outlined"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
            <TextField
              sx={{ mb: 1 }}
              label="Mobile Number *"
              fullWidth
              variant="outlined"
              {...register("mobileNumber")}
              error={!!errors.mobileNumber}
              helperText={
                errors.mobileNumber ? errors.mobileNumber.message : ""
              }
            />
            <FormControl sx={{ mb: 1 }} fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="eventDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Event Date *"
                      slotProps={{
                        textField: {
                          error: !!errors.eventDate,
                        },
                      }}
                      disablePast
                      format="DD-MM-YYYY"
                      value={field.value || null}
                      onChange={(date) => field.onChange(date)}
                    />
                  )}
                />
              </LocalizationProvider>
            </FormControl>
          </Box>
        </DialogContent>
        <Container sx={{ padding: 0, mb: 2 }}>
          <DialogActions>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              confirm
            </Button>
          </DialogActions>
        </Container>
      </form>
    </Dialog>
  );
}

export default CateringRequestModel;
