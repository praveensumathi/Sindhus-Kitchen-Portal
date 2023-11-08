import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const whyChooseUsSytle = makeStyles((theme: Theme) => ({
  centerImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  imageWithBorder: {
    borderRadius: "50%",
    backgroundColor: "white",
    width: "6rem",
    height: "6rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.4s",
    transformStyle: "preserve-3d",
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transition: "transform 0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  flipCardBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transition: "transform 0.5s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    transform: "rotateY(180deg)",
    fontWeight: "bolder",
  },
  flipcard: {
    maxWidth: 300,
    height: 300,
    position: "relative",
    borderRadius: "20px !important",
    perspective: "1000px",
    transition: "transform 0.4s",
    transformStyle: "preserve-3d",
    zIndex: 1,
    "&:hover $flipCardInner ": {
      transform: "rotateY(180deg)",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  },
}));
