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

function Footer() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid container item spacing={1} className={styles.centerGridStyle}>
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
          <Grid item lg={3.9} xs={12} sx={centerGridStyle}>
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
              <Typography>Mon-Sun:10.00AM - 7.00AM</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container item spacing={3} xs={12}>
          <Grid item lg={4} xs={12}>
            <TextField label="Full Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item lg={4} xs={12}>
            <TextField label="Email ID" fullWidth variant="outlined" />
          </Grid>
          <Grid item lg={4} xs={12}>
            <TextField label="Mobile Number" fullWidth variant="outlined" />
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12}>
          <Grid container item xs={12}>
            <TextField label="Message" fullWidth variant="outlined" />
          </Grid>
          <Grid container item sx={centerGridStyle}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
