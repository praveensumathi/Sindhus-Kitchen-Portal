import { Box, Card, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function CommonProductCard({ title, mrpprice, imageUrl, offerprice }) {
  return (
    <Box>
      <Card sx={{ width: "300px", boxShadow: 6 }}>
        <CardMedia
          component="img"
          src={imageUrl}
          sx={{
            width: "300px",
            height: "200px",
            cursor: "pointer",
            transition: "transform 2s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <CardContent>
          <Typography variant="body1" component="div">
            {title}
          </Typography>
          <Box sx={{ display: "flex" }}>
            {offerprice ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textDecoration: "line-through",
                }}
              >
                ${mrpprice}
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary">
                ${mrpprice}
              </Typography>
            )}
            {offerprice && (
              <Typography variant="body2" color="orange" sx={{ marginLeft: 1 }}>
                ${offerprice}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CommonProductCard;
