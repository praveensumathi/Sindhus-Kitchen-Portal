import {
  Box,
  Card,
  CardMedia,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { IProductCardList } from "../../interface/types";
import { Link } from "react-router-dom";

interface IProps {
  product: IProductCardList;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

function CommonProductCard(props: IProps) {
  const { product } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Card sx={{ width: "14rem !important", boxShadow: 4 }}>
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
              width: "250px",
              height: "180px",
              cursor: "pointer",
              transition: "transform 2s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Link>
        <CardContent>
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
    </Box>
  );
}

export default CommonProductCard;
