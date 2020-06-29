/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const Cards = (props) => {
  return (
    <Card style={{ width: '30%', margin: '1%' }}>
      <CardActionArea>
        <CardMedia
          image={props.src}
          title="Contemplative Reptile"
          style={{ height: 200 }}>
          <img />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
      Share
        </Button>
        <Button size="small" color="primary">
      Learn More
        </Button>
      </CardActions>
    </Card>

  )
}

export default Card