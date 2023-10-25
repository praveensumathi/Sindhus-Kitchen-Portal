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
          <Grid container item spacing={1} className={classes.commonGridStyle}>
            <Grid item lg={3} xs={12}>
              <Box>
                <LocationOnIcon
                  sx={{ color: "rgb(112, 83, 68)" }}
                ></LocationOnIcon>
                <Typography>Our Office Address</Typography>
                <Typography>
                  sdfghj3rtyui sdfghjerthj sdfgh sdfghj sdfgh
                </Typography>
              </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item lg={3.9} xs={12} className={classes.commonGridStyle}>
              <Box>
                <ChatBubbleIcon
                  sx={{ color: "rgb(112, 83, 68)" }}
                ></ChatBubbleIcon>
                <Typography>General Enquiries</Typography>
                <Box
                  sx={{
                    gap: "9px",
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
            <Divider orientation="vertical" flexItem />
            <Grid item lg={2} xs={12}>
              <Box>
                <PhoneIcon sx={{ color: "rgb(112, 83, 68)" }}></PhoneIcon>
                <Typography>Call us </Typography>
                <Typography>1234567890</Typography>
                <Typography>1234567890</Typography>
              </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item lg={3} xs={12}>
              <Box>
                <AccessTimeFilledIcon
                  sx={{ color: "rgb(112, 83, 68)" }}
                ></AccessTimeFilledIcon>
                <Typography>Our Timing</Typography>
                <Typography>Mon-Sun:10.00AM - 7.00PM</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container item spacing={3} xs={12}>
            <Grid item lg={4} xs={12}>
              <CssTextField
                sx={{
                  color: "white !important",
                }}
                label="Full Name"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item lg={4} xs={12}>
              <CssTextField label="Email ID" fullWidth variant="outlined" />
            </Grid>
            <Grid item lg={4} xs={12}>
              <CssTextField
                label="Mobile Number"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container item spacing={2} xs={12}>
            <Grid container item xs={12}>
              <CssTextField label="Message" fullWidth variant="outlined" />
            </Grid>
            <Grid container item className={classes.commonGridStyle}>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
