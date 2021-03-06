import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
import API from '../../util/API'



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

// const [search, setSearch] = useState([]);

// const handleInputChange = event => {
//   setSearch(event.target.value);
// };
// const upsplash = "https://api.unsplash.com/photos/?client_id=BYKd8TanY-MFPXBF3GlzYikT_A8Yk4WoZTVFaguRV3w"




export default function CustomizedInputBase() {
  const classes = useStyles();
  const searchInput = useRef();


  const SearchHobby = (e) => {
    e.preventDefault();
    console.log(searchInput.current.children[0].value)
    const searchResult = searchInput.current.children[0].value
    API.unsplash.search.getPhotos({
      query: searchResult,
      orientation: "landscape"
    }).then(res => console.log(res.response.results))
  }
  return (
    <Paper component="form" className={classes.root} onSubmit={SearchHobby}>
      {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        ref={searchInput}
        className={classes.input}
        placeholder="Search Hobby Drop"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      {/* <IconButton color="primary" className={classes.iconButton} aria-label="directions"> */}
      {/* <DirectionsIcon />
      </IconButton> */}
    </Paper>
    //   <SearchForm
    //   handleInputChange={handleInputChange}
    //   results={search}
    // />
  );
}