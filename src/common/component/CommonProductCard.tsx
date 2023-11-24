import { Box, Card, CardMedia, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { IProductCardList } from "../../interface/types";
import { Link } from "react-router-dom";

interface IProps {
  product: IProductCardList;
  children?: React.ReactNode;
}

function CommonProductCard(props: IProps) {
  const { product } = props;

  const theme = useTheme();

  return (
    <div>
      <Card sx={{ width: "14rem", height: "16rem", boxShadow: 2 }}>
        <Link
          to={`/detail/${product._id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <CardMedia
            component="img"
            src={product.posterURL}
            sx={{
              objectFit: "cover",
              width: "100%",
              height: "12rem",
              cursor: "pointer",
              position: "center",
            }}
          />
        </Link>
        <CardContent
          sx={{
            height: "4rem",
            padding : 1
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600 }} component="div">
            {product.title}
          </Typography>
          <Box sx={{ display: "flex" }}>
            {product.price && (
              <Typography variant="body2" color={theme.palette.primary.main}>
                ${product.price}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default CommonProductCard;
