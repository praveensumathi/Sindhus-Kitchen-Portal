import CardContent from "@mui/material/CardContent";
import { IProductCardList } from "../../interface/types";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

interface IProps {
  product: IProductCardList;
}

function CommonProductCard(props: IProps) {
  const { product } = props;
  const theme = useTheme();

  return (
    <Link to={`/detail/${product._id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          boxShadow: 4,
          mr: 2,
          width: "250px",
          height: "280px",
        }}
      >
        <Box
          sx={{
            height: "180px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            src={product.posterURL}
            sx={{
              width: "100%",
              height: "100%",
              transition: "transform 400ms",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="body1" sx={{ fontWeight: 600 }} component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color={theme.palette.primary.main}>
            ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CommonProductCard;
