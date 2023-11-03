import React from "react";
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
import CssTextField from "../common/component/CommonTextfeild";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";

function Footer() {
  const classes = useCommonGridStyle();
  const [date, setDate] = React.useState<string>(
    dayjs(new Date()).format("YYYY-MM-DD")
  );

  const handleDateChange = (newDate: Date | null) => {
    if (newDate) {
      const formattedDate = dayjs(newDate).format("YYYY-MM-DD");
      setDate(formattedDate);
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
                  sx={{ color: "rgb(112, 83, 68)" }}
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
                  sx={{ color: "rgb(112, 83, 68)" }}
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
                <PhoneIcon sx={{ color: "rgb(112, 83, 68)" }}></PhoneIcon>
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
                  sx={{ color: "rgb(112, 83, 68)" }}
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
                required
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                label="Email Id"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                label="Mobile Number"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField label="Type Of Event" fullWidth variant="outlined" />
            </Grid>
            <Grid item lg={3} xs={12}>
              {/* <CssTextField label="Event Date" fullWidth variant="outlined" /> */}
              <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    format="dd-MM-yyyy"
                    value={new Date(date)}
                    onChange={(date) => handleDateChange(date)}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label="Guest Count" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                fullWidth
                variant="outlined"
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} className={classes.commonGridStyle}>
              <Button sx={{ marginBottom: 1 }} variant="contained">
                Submit Catering Request
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
