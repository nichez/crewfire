import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    width: 345,
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

const FeedItem = ({ item }) => {
  const classes = useStyles();
  const { media, author, link } = item;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={media.m}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='h2'>
            {author.length > 26 ? `${author.substring(0, 26)}..` : author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color='primary' href={link}>
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeedItem;
