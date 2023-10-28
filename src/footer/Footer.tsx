import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useCommonGridStyle } from "../styles/FooterStyle";
import CssTextField from "../common/component/CommonTextfeild";

function Footer() {
  const classes = useCommonGridStyle();

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
      <Container>
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
                    chat on mail
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
          <Grid container item spacing={3} xs={12}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ textAlign: "center" }}
              >
                Catering Request Form
              </Typography>
            </Grid>
            <Grid item lg={6} xs={12}>
              <CssTextField
                sx={{
                  color: "white !important",
                }}
                label="Full Name"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CssTextField label="Email ID" fullWidth variant="outlined" />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CssTextField
                label="Mobile Number"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CssTextField
                label="Type Of Event"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CssTextField label="Event Date" fullWidth variant="outlined" />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CssTextField
                label="Guest Count  "
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container item spacing={2} xs={12}>
            <Grid container item xs={12}>
              <CssTextField
                label="Message"
                fullWidth
                variant="outlined"
                multiline
                rows={3}
              />
            </Grid>
            <Grid container item className={classes.commonGridStyle}>
              <Button variant="contained">Submit Catering Request</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
