import React, { useState, useEffect } from 'react';
import API from "../../util/API";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { List, ListItem } from '@material-ui/core';
import Moment from 'react-moment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    alignItems: 'center',
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
  const [num, setNum] = useState(0)

  useEffect(() => {
    loadPosts();
    setNum(num + 1)
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
    <>
      {!posts.length ? (
        <h3>No Results to Display</h3>
      ) : (posts.map(post => {
        return (
          <Card className={classes.root}>
            <CardContent>

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
                <strong>Contact:</strong> {post.contactNumber || post.contactEmail}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>)
      }
      ))}
    </>)
  //       {!posts.length ? (
  //         <h3>No Results to Display</h3>
  //       ) : (
  //           <List>
  //             { posts.map(post => {
  //               return (
  //                 <Card
  //                   key={post._id}
  //                   classes={styles.card}
  //                 // date={post.date}
  //                 // username={post.username}
  //                 // title={post.title}
  //                 // description={post.description}
  //                 // price={post.price}
  //                 // number={post.contactNumber}
  //                 // email={post.contactEmail}
  //                 >
  //                   <h1>{post.username}</h1>
  //                   <p>{post.date}</p>
  //                   <p>{post.title}</p>
  //                   <p>{post.description}</p>
  //                   <p>Price: ${post.price}</p>
  //                 </Card>

  //               )
  //             })

  //             }
  //           </List>

  //         )}

  //     </Card>
  //   );
}