import CardContent from "@mui/material/CardContent";
import { IProductCardList } from "../../interface/types";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { paths } from "../../routes/path";

interface IProps {
  product: IProductCardList;
  menuType?: number;
}

function CommonProductCard(props: IProps) {
  const { product } = props;
  const theme = useTheme();

  return (
    <Link
      to={`/detail/${product._id}`}
      state={{ previousPath: paths.DININGOUT }}
      style={{ textDecoration: "none" }}
    >
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
            sx={{
              fontWeight: 600,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
            }}
            component="div"
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            fontSize={"1.2rem"}
            color={theme.palette.primary.main}
          >
            {product.dailyMenuSizeWithPrice &&
            product.dailyMenuSizeWithPrice.length > 0 ? (
              product.dailyMenuSizeWithPrice.map((sizePrice) => (
                <Typography key={sizePrice._id}>
                  <span style={{ color: "black", opacity: 0.7,fontWeight:800 }}>
                    {sizePrice.size}-
                  </span>
                  &nbsp;${sizePrice.price}
                </Typography>
              ))
            ) : (
              <>${product.price}</>
            )}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CommonProductCard;
