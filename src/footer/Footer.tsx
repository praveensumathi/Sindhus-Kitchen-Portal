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
import { ICateringEnquiry } from "../interface/types";
import { createCateringEnquiry } from "../services/api";
import { EnquiryFormInitialValue } from "../constants/InitialValues";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useSnackBar } from "../context/SnackBarContext";
import { SnackbarSeverityEnum } from "../enums/SnackbarSeverityEnum";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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
  eventDate: yup.string().required("Event date is required"),
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
  } = useForm<ICateringEnquiry>({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: EnquiryFormInitialValue,
  });

  const onSubmitCateringEnquiry = async (data: ICateringEnquiry) => {
    try {
      const response = await createCateringEnquiry(data);
      updateSnackBarState(
        true,
        "Form submitted successfully",
        SnackbarSeverityEnum.SUCCESS
      );
      reset();
    } catch (error) {
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
      <Fade top>
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <Typography variant="h4" fontWeight={600}>
            Contact Us
          </Typography>
        </Box>
      </Fade>
      <Container sx={{ paddingBottom: 2 }}>
        <Grid container sx={{ gap: 3 }}>
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
              <Fade left>
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
              </Fade>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ background: "white" }}
            />
            <Grid item lg={3} xs={12} className={classes.commonGridStyle}>
              <Fade bottom delay={300}>
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
              </Fade>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ background: "white" }}
            />
            <Grid item lg={2.9} xs={12} className={classes.commonGridStyle}>
              <Fade bottom delay={400}>
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
              </Fade>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ background: "white" }}
            />
            <Grid item lg={3} xs={12} className={classes.commonGridStyle}>
              <Box>
                <Fade right>
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
                </Fade>
              </Box>
            </Grid>
          </Grid>
          <Zoom>
            <Box sx={{ zIndex: 1 }}>
              <form onSubmit={handleSubmit(onSubmitCateringEnquiry)}>
                <Grid
                  container
                  item
                  spacing={2}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    p: 2,
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
                      label="Full Name *"
                      fullWidth
                      variant="outlined"
                      {...register("fullName")}
                      error={!!errors.fullName}
                      helperText={
                        errors.fullName ? errors.fullName.message : ""
                      }
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <TextField
                      label="Email *"
                      fullWidth
                      variant="outlined"
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <TextField
                      label="Mobile Number *"
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
                    <FormControl fullWidth error={!!errors.eventDate}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                          name="eventDate"
                          control={control}
                          render={({ field }) => (
                            <DatePicker
                              {...field}
                              label="Event Date *"
                              onChange={(date) => field.onChange(date)}
                              sx={{
                                width: "100%",
                                backgroundColor: "white",
                              }}
                              format="DD-MM-YYYY"
                            />
                          )}
                        />
                      </LocalizationProvider>
                      {!!errors.eventDate && (
                        <FormHelperText>
                          {errors.eventDate.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item lg={3} xs={12}>
                    <TextField
                      label="Guest Count"
                      fullWidth
                      variant="outlined"
                      type="number"
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
                      Send Request
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Zoom>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
