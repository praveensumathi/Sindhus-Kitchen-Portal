import { makeStyles } from "@mui/styles";

export const useCommonGridStyle = makeStyles(() => ({
  commonGridStyle: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  footerContainer: {
    backgroundImage: `url("https://th.bing.com/th/id/OIP.s2ZLXwMZ3JjRPraZJfIxRQHaEK?w=334&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
    color: "white",
    position: "relative",
    zIndex: 1,
  },
  overlay: {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
  },
  innerBox: {
    "& .MuiTypography-root, & .MuiGrid-root": {
      zIndex: 4,
    },
  },
}));
