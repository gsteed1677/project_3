import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from "../../assets/img/Knitting.jpg"
import './styles.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { FormatAlignCenter } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    margin: "20px"
   
  },
 
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (

    <Card className={classes.root} class="cardTrending"> 
      <CardActionArea>
        <CardMedia className={classes.media}
          component="img"
          alt="Image Here"
          height="140"
          image={props.Image}
          title="Trending Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.data}
          </Typography>
      <CardActions>
        
        <Link>
              <FavoriteIcon to="Favorites" >Favorite</FavoriteIcon>
              </Link>
      </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}