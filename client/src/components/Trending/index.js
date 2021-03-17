import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './styles.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {


  },

});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Grid class="cardBackground">
      <h1>Top Trending</h1>
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

              <Button>
                <FavoriteIcon to="Favorites" color="secondary">Favorite</FavoriteIcon>
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}