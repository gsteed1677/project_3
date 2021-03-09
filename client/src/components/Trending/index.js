import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from "../../assets/img/Knitting.jpg"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormatAlignCenter } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    margin: "20px"
   
    
  },
  media:{
      height: 100,
  paddingTop: "10", // 16:9,
  marginTop: "30",

  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (

    <Card className={classes.root}> 
      <CardActionArea>
        <CardMedia className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
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
  );
}