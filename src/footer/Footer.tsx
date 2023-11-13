import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Container, Divider, Typography } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useCommonGridStyle } from "../styles/FooterStyle";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import theme from "../theme/theme";
import * as yup from "yup";
import { ICateringEnquiries } from "../interface/types";
import { createCateringEnquiry } from "../services/api";
import { EnquiryFormInitialValue } from "../constants/InitialValues";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useSnackBar } from "../context/SnackBarContext";
import { SnackbarSeverityEnum } from "../enums/SnackbarSeverityEnum";

const schema = yup.object().shape({
  fullName: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  mobileNumber: yup
    .string()
    .required()
    .typeError("Please enter the MobileNumber")
    .matches(/^[0-9]{10}$/, "Please enter a valid MobileNumber"),
});

function Footer() {
  const classes = useCommonGridStyle();
  const { updateSnackBarState } = useSnackBar();
  const [date, setDate] = useState<string>(
    dayjs(new Date()).format("YYYY-MM-DD")
  );

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    control,
  } = useForm<ICateringEnquiries>({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: EnquiryFormInitialValue,
  });

  const onSubmitCateringEnquiry = async (data: ICateringEnquiries) => {
    try {
      const response = await createCateringEnquiry(data);
      console.log("Snackbar (Success): submitted successfully");
      console.log("Response:", response);
      updateSnackBarState(
        true,
        "Form submitted successfully",
        SnackbarSeverityEnum.SUCCESS
      );
      reset();
    } catch (error) {
      console.error("Error while submitting the form", error);
      updateSnackBarState(
        true,
        "Error while submitting the form",
        SnackbarSeverityEnum.ERROR
      );
    }
  };

  return (
    <Box
      sx={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)" }}
      className={`${classes.footerContainer} ${classes.innerBox}`}
    >
      <Box className={classes.overlay}></Box>
      <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
        <Typography variant="h4" fontWeight={600}>
          Contact Us
        </Typography>
      </Box>
      <Container sx={{ paddingBottom: 2 }}>
        <Grid container spacing={2} sx={{ gap: 3 }}>
          <Grid
            container
            item
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid item lg={3} xs={12} className={classes.commonGridStyle}>
              <Box>
                <LocationOnIcon
                  sx={{ color: theme.palette.secondary.main }}
                ></LocationOnIcon>
                <Typography variant="h5" my={2}>
                  Our Office Address
                </Typography>
                <Typography>
                  2700 E Eldorado Pkwy, #203,
                  <br /> Little Elm, Texas - 75068
                </Typography>
              </Box>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ background: "white" }}
            />
            <Grid item lg={3} xs={12} className={classes.commonGridStyle}>
              <Box>
                <ChatBubbleIcon
                  sx={{ color: theme.palette.secondary.main }}
                ></ChatBubbleIcon>
                <Typography variant="h5" my={2}>
                  General Enquiries
                </Typography>
                <Typography my={2}>skvbalaji@gmail.com</Typography>
                <Box
                  sx={{
                    gap: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    startIcon={<EmailIcon />}
                    variant="contained"
                    fullWidth
                    sx={{
                      lineHeight: 0,
                      backgroundColor: "#f44336",
                      "&:hover": {
                        backgroundColor: "#f44336",
                      },
                    }}
                  >
                    Send mail
                  </Button>
                  <Button
                    startIcon={<WhatsAppIcon />}
                    variant="contained"
                    fullWidth
                    sx={{
                      lineHeight: 0,
                      backgroundColor: "#4caf50",
                      "&:hover": {
                        backgroundColor: "#4caf50",
                      },
                    }}
                  >
                    chat on Whatsapp
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ background: "white" }}
            />
            <Grid item lg={2.9} xs={12} className={classes.commonGridStyle}>
              <Box>
                <PhoneIcon
                  sx={{ color: theme.palette.secondary.main }}
                ></PhoneIcon>
                <Typography variant="h5" my={2}>
                  Call us
                </Typography>
                <Typography>+1.9402792536</Typography>
                <Typography>1234567890</Typography>
              </Box>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ background: "white" }}
            />
            <Grid item lg={3} xs={12} className={classes.commonGridStyle}>
              <Box>
                <AccessTimeFilledIcon
                  sx={{ color: theme.palette.secondary.main }}
                ></AccessTimeFilledIcon>
                <Typography variant="h5" my={2}>
                  Our Timing
                </Typography>
                <Typography>
                  Monday 11AM-9PM
                  <br /> Tuesday Closed
                  <br /> Wednesday 11AM-9PM
                  <br /> Thursday 11AM-10PM
                  <br /> Friday 11AM-10PM
                  <br /> Saturday 11AM-10PM
                  <br /> Sunday 11AM-9PM
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ zIndex: 1 }}>
            <form onSubmit={handleSubmit(onSubmitCateringEnquiry)}>
              <Grid
                container
                item
                spacing={2}
                xs={12}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  paddingRight: 5,
                  margin: { md: "0 4rem", xs: 0 },
                }}
              >
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ textAlign: "center", color: "black" }}
                  >
                    Catering Request Form
                  </Typography>
                </Grid>

                <Grid item lg={6} xs={12}>
                  <TextField
                    label="Full Name"
                    fullWidth
                    variant="outlined"
                    {...register("fullName")}
                    error={!!errors.fullName}
                    helperText={errors.fullName ? errors.fullName.message : ""}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TextField
                    label="Email Id"
                    fullWidth
                    variant="outlined"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TextField
                    label="Mobile Number"
                    fullWidth
                    variant="outlined"
                    {...register("mobileNumber")}
                    error={!!errors.mobileNumber}
                    helperText={
                      errors.mobileNumber ? errors.mobileNumber.message : ""
                    }
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TextField
                    label="Type Of Event"
                    fullWidth
                    variant="outlined"
                    {...register("typeOfEvent")}
                  />
                </Grid>
                <Grid item lg={3} xs={12}>
                  <Box>
                    <Controller
                      name="eventDate"
                      control={control}
                      defaultValue={date}
                      render={({ field }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={field.value || null}
                            label="Event Date"
                            onChange={(date) => field.onChange(date)}
                            sx={{ width: "100%", backgroundColor: "white" }}
                            format="DD-MM-YYYY"
                          />
                        </LocalizationProvider>
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item lg={3} xs={12}>
                  <TextField
                    label="Guest Count"
                    fullWidth
                    variant="outlined"
                    {...register("guestCount")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={3}
                    {...register("message")}
                  />
                </Grid>
                <Grid item xs={12} className={classes.commonGridStyle}>
                  <Button
                    type="submit"
                    sx={{ marginBottom: 1 }}
                    variant="contained"
                  >
                    Submit Catering Request
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
