import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List, ListItem } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts();
  }, []);

  function loadPosts() {
    API.getPosts()
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(err => console.log(err))
  };

  return (
    <Card className={classes.root} variant="outlined">
      {/* <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>

        </Typography>
        <Typography variant="h5" component="h2">

        </Typography>
        <Typography className={classes.pos}>
        </Typography>
        <Typography variant="body2" component="p">

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}

      {!posts.length ? (
        <h3>No Results to Display</h3>
      ) : (
          <List>
            { posts.map(post => {
              return (
                <ListItem
                  //  should the uniisue key be date or id?
                  key={post.date}
                  date={post.date}
                  username={post.username}
                  title={post.title}
                  description={post.description}
                  price={post.price}
                  contactNumber={post.contactNumber}
                  contactEmail={post.contactEmail}
                />
              )
            })

            }
          </List>

        )}

    </Card>
  );
}