import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import DEFAULT_IMAGE from '../../assets/default_news.jpg';

import classes from './Card.module.scss';

const NewsCard = ({ title, description, image, date }) => {

  const truncateText = (text, maxLength) => {
    if (!text) return ""; // Ensure text is a valid string
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  
  return (
    <Card className={classes.newsCard}>
      
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image || DEFAULT_IMAGE}
          title={title}
        />
      <CardContent>
        <Typography gutterBottom variant="h5">
        {truncateText(title, 40)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {truncateText(description, 80)}
        </Typography>
        <Typography variant="caption" color="textSecondary" display="block">
          {new Date(date).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
