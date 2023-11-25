import { Box, Card, CardMedia, Typography, useTheme } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { IProductCardList } from "../../interface/types";
import { Link } from "react-router-dom";

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
        }}
      >
        <Box
          sx={{
            width: "250px",
            height: "180px",
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
