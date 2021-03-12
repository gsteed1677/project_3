import React, { useState, useEffect } from 'react';
import API from "../../util/API";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { List, ListItem } from '@material-ui/core';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './styles.css'

const useStyles = makeStyles((theme) => ({
   
}));


export default function OutlinedCard() {
  const classes = useStyles();


  // const bull = <span className={classes.bullet}>•</span>;

  const [posts, setPosts] = useState([])
  // const [num, setNum] = useState(0)

  useEffect(() => {
    loadPosts();
    // setNum(num + 1)
  }, []);

  function loadPosts() {
    API.getPosts()
      .then(res => {
        console.log(res.data)
        setPosts(res.data)

      })
      .catch(err => console.log(err))
  };

  //DONT USE BUTTON AS BUTTON USE LINK DESIGNED AS BUTTON 
  // <Link to="/signup" className="btn btn-primary">Sign up</Link>
  return (
    <div className={classes.root}>
      <Grid>

        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          {/* once we inject the user object we will replace 3 with the dynamic {`user._id`} */}
          <Link to="/postform/3"><Button>Make a Post</Button></Link>
          {/* //wrap this button in a .filer that grabs the users posts ( user.username === username , then render same cards as below but add an update and delete button where favorites button exists now) then on those buttons they need functionality to update and delete users posts from DB */}
          <Button>My Posts</Button>
          <Button>My Favorites</Button>
        </ButtonGroup>

      </Grid>

      {!posts.length ? (
        <h3>No Results to Display</h3>
      ) : (posts.map(post => {
        return (
            <Grid className="cardContainer" >
              <Card class="card">
{/*  direction="row" alignItems="center" */}
                <CardContent class="cardContent">

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
                <CardActions>

                  <Link>
                    <FavoriteIcon to="Favorites" >Favorite</FavoriteIcon>
                  </Link>
                </CardActions>
                </CardContent>
              </Card>
            </Grid>
          )
      }
      ))}
    </div>)
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