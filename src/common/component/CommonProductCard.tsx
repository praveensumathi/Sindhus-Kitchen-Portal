import CardContent from "@mui/material/CardContent";
import { IProductCardList } from "../../interface/types";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import LazyLoad from "react-lazyload";
import Placeholder from "./Placeholder";
import { MenuType } from "../../enums/MenuTypesEnum";

interface IProps {
  product: IProductCardList;
  menuType: number;
}

function CommonProductCard(props: IProps) {
  const { product } = props;
  const theme = useTheme();

  return (
    <LazyLoad
      once
      key={product._id}
      height={200}
      placeholder={<Placeholder />}
      debounce={100}
    >
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
              loading="lazy"
            />
          </Box>
          <CardContent>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600 }}
              component="div"
            >
              {product.title}
            </Typography>
            {props.menuType == MenuType.OTHERS ? (
              <Typography variant="body2" color={theme.palette.primary.main}>
                ${product.servingSizeFirstPrice}
              </Typography>
            ) : (
              <Typography variant="body2" color={theme.palette.primary.main}>
                ${product.price}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Link>
    </LazyLoad>
  );
}

export default CommonProductCard;
