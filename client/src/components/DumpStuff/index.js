import { useAuth } from "../../contexts/AuthContext";
import React, { useState, useEffect } from 'react';
import API from "../../util/API";
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';


import './styles.css'
import Postcard from '../Postcard'

const useStyles = makeStyles((theme) => ({

}));

export default function OutlinedCard() {
  const classes = useStyles();
  const { currentUser } = useAuth();

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState(false)
  const [filterPost, setFilterPost] = useState([])

  useEffect(() => {
    loadPosts();
  }, []);

  function loadPosts() {
    API.getPosts()
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
        setFilterPost(res.data.filter(post => post.id === currentUser.id))

      })
      .catch(err => console.log(err))
  };

  const handleFilter = async () => {
    setFilter(!filter)
  }

  function deletePost(id) {
    API.deletePost(id)
      .then(res => loadPosts())
      .catch(err => console.log(err))
  }

  // function updatePost() {

  // }

  return (
    <div className={classes.root}>
      <Grid>

        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">

          <Link to={`postform/ ${currentUser.uid}`}><Button>Make a Post</Button></Link>

          <Button onClick={handleFilter}>My Posts</Button>
          <Button>My Favorites</Button>
        </ButtonGroup>

      </Grid>
      {!filter ?
        posts.map(post => {
          return (
            <Postcard
              post={post}
            >
              <Link>
                <FavoriteIcon to="Favorites" >Favorite</FavoriteIcon>
              </Link>
            </Postcard>
          )
        })
        : filterPost.map(post => {
          return (<>
            <Postcard
              post={post}>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteForeverIcon />}
                  onClick={() => deletePost(post._id)}
                >
                  Delete
                    </Button>
                <Link to={{
                  pathname: `/update/${post._id}`,
                  //we are passing a state object to page we are taken to, the post we want to update
                  state: post
                }}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<UpdateIcon />}

                  >
                    Update
                  </Button>
                </Link>
              </CardActions>
            </Postcard>

          </>)
        })}
    </div >)
}