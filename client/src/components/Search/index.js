import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import API from '../../util/API';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const searchInput = useRef();

  const SearchHobby = (e) => {
    e.preventDefault();
    console.log(searchInput.current.children[0].value)
    const searchResult = searchInput.current.children[0].value
    API.unsplash.search.getPhotos({
      query: searchResult,
      orientation: "landscape"
    }).then(res => {
      props.setData(res.response.results)
      console.log(res.response.results)
    })
  }

  return (
    <Container Container style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <Paper component="form" className={classes.root} onSubmit={SearchHobby}>
        <InputBase
          ref={searchInput}
          className={classes.input}
          placeholder="Search for Inspiration"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
      </Paper>
    </Container>
  );
}