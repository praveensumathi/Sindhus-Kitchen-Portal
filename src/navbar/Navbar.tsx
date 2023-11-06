import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import { CssBaseline } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../routes/path";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const navMenus = [
  { name: "Home", linkurl: paths.HOME },
  { name: "Specials", linkurl: paths.SPECIALS },
  { name: "Dining Out", linkurl: paths.DININGOUT },
  { name: "Snacks Menu", linkurl: paths.SNACKSPAGE },
  { name: "Catering Menu", linkurl: paths.CATERINGPAGE },
];

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = useMediaQuery("(max-width: 1024px)");

  const theme = useTheme();
  const isBelowSMScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [selectedMenu, setSelectedMenu] = React.useState<string | null>(null);

  const isMobile = matches;

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    setAppBarPosition("fixed");
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setAppBarPosition("static");
  };

  const [appBarPosition, setAppBarPosition] = React.useState("static");

  React.useEffect(() => {
    if (!matches) {
      setDrawerOpen(false);
    } else {
    }
  }, [matches]);

  const handleMenuClick = (menuName: string) => {
    for (const menu of navMenus) {
      if (menu.name === menuName && menu.linkurl) {
        {
          navigate(menu.linkurl);
          handleDrawerClose();
          setSelectedMenu(menu.name);
        }
      }
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setAppBarPosition("fixed");
      } else {
        setAppBarPosition("static");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigateToHome = () => {
    navigate(paths.HOME);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(15px)",
          borderStyle: "solid",
          borderWidth: 0,
          borderBottomWidth: "thin",
          backgroundColor: "rgba(255,255,255,0.7)",
          position: appBarPosition,
        }}
        component="nav"
      >
        <Container maxWidth={false}>
          <Toolbar sx={{ p: 0, height: "35px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <img
                src="assets\sindhus-logo.png"
                alt="Logo"
                style={{
                  height: "auto",
                  width: isBelowSMScreen ? "3rem" : "4rem",
                  marginTop: "10px",
                }}
                loading="lazy"
                onClick={handleNavigateToHome}
              />
              <Typography
                sx={{ fontWeight: 500, color: "red", fontSize: "25px" }}
              >
                sindhu's
              </Typography>
            </Box>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label={drawerOpen ? "close drawer" : "open drawer"}
                edge="end"
                onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}
                sx={{ ml: 2 }}
              >
                {drawerOpen ? (
                  <CloseIcon sx={{ color: "black", fontSize: "30px" }} />
                ) : (
                  <MenuIcon sx={{ color: "black", fontSize: "30px" }} />
                )}
              </IconButton>
            ) : (
              <Box display={"flex"}>
                {navMenus.map((menu, index) => (
                  <Box
                    key={menu.name}
                    sx={{
                      position: "relative",
                      marginRight: index < navMenus.length - 1 ? "10px" : "0",
                    }}
                  >
                    <Link to={menu.linkurl} style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          borderRadius: "50px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "large",
                          textTransform: "none",
                          backgroundColor:
                            location.pathname === menu.linkurl
                              ? theme.palette.primary.main
                              : "none",
                          color:
                            location.pathname === menu.linkurl
                              ? "white"
                              : "black",
                          "&:hover": {
                            backgroundColor: "orange",
                            color: "white",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          px={2}
                        >
                          {menu.name}
                        </Box>
                      </Button>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerClose}
        variant="persistent"
        PaperProps={{ elevation: 5 }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
            width: "100%",
          }}
        >
          <List
            sx={{
              width: "inherit",
            }}
          >
            {navMenus.map((menu, index) => (
              <Box
                key={menu.name}
                borderBottom={navMenus.length - 1 === index ? 0 : 0.1}
                borderColor={"lightgrey"}
              >
                <Button
                  onClick={() => handleMenuClick(menu.name)}
                  sx={{
                    color: "black",
                    borderRadius: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "medium",
                    textTransform: "none",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    px={2}
                  >
                    {menu.name}
                  </Box>
                </Button>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default NavBar;
