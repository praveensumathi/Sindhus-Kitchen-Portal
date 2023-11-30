import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useCommonGridStyle } from "../styles/FooterStyle";
import theme from "../theme/theme";
import Fade from "react-reveal/Fade";
import CateringEnquiryForm from "../common/component/CateringEnquiryForm";
import { useLocation } from "react-router";
import { paths } from "../routes/path";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isCateringMenuPage = location.pathname === paths.CATERING;
  const classes = useCommonGridStyle();

  return (
    <Box
      sx={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)" }}
      className={`${classes.footerContainer} ${classes.innerBox}`}
    >
      <Box className={classes.overlay}></Box>
      <Fade top>
        <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
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
                <Box sx={{ my: 1 }}>
                  <LocationOnIcon
                    sx={{ color: theme.palette.secondary.main }}
                  ></LocationOnIcon>
                  <Typography variant="h5"> Store Address</Typography>
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
                <Box sx={{ my: 1 }}>
                  <ChatBubbleIcon
                    sx={{ color: theme.palette.secondary.main }}
                  ></ChatBubbleIcon>
                  <Typography variant="h5">General Enquiries</Typography>
                  <Typography my={1}>skvbalaji@gmail.com</Typography>
                  <Box
                    sx={{
                      gap: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="mailto:skvbalaji@gmail.com"
                      style={{ textDecoration: "none", color: "white" }}
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
                    </a>

                    <Link
                      to={`${import.meta.env.VITE_SINDHUS_WHATSAPP}`}
                      target="_blank"
                    >
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
                        Chat on Whatsapp
                      </Button>
                    </Link>
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
                <Box sx={{ my: 1 }}>
                  <PhoneIcon
                    sx={{ color: theme.palette.secondary.main }}
                  ></PhoneIcon>
                  <Typography variant="h5">Call us</Typography>
                  <Typography>+1 940-279-2536</Typography>
                </Box>
              </Fade>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ background: "white" }}
            />
            <Grid item lg={3} xs={12} className={classes.commonGridStyle}>
              <Box sx={{ my: 1 }}>
                <Fade right>
                  <AccessTimeFilledIcon
                    sx={{ color: theme.palette.secondary.main }}
                  ></AccessTimeFilledIcon>
                  <Typography variant="h5">Our Timing</Typography>
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
        </Grid>
        {isCateringMenuPage && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <CateringEnquiryForm />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Footer;
