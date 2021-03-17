import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { List, ListItem } from '@material-ui/core';
import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
// import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
}));

function Postcard({ post, children }) {
    const classes = useStyles();

    return (
        <Grid className="cardContainer" >
            <Card class="card">
                {/*  direction="row" alignItems="center" */}
                <CardContent className="cardContent">

                    <Typography variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {post.username} --  <Moment format="dddd, MMMM Do YYYY, h:mm:ss a">
                            {post.date}
                        </Moment>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <strong>Description:</strong> {post.description}
                        <br />
                        <strong>Price:</strong> ${post.price}
                        <br />
                        <strong>Contact:</strong> {post.contactEmail}
                    </Typography>
                    <CardActions>


                        {children}
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Postcard
