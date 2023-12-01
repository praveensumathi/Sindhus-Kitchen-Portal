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
import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloseIcon from "@mui/icons-material/Close";



interface IProps {
  open: boolean;
  onClose: () => void;
}

function CateringRequestModel(props: IProps) {
  const { open, onClose } = props;

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
          <Typography sx={{fontWeight:600,fontSize:"large"}}> Enter Your Details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          <TextField
            sx={{ padding: 1 }}
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            sx={{ padding: 1 }}
            label="Mobile Number"
            variant="outlined"
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker sx={{ padding: 1 }} label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CateringRequestModel;
