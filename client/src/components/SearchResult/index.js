import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import { Card, CardActionArea, Container, Grid } from "@material-ui/core";


import CardMedia from '@material-ui/core/CardMedia';


export default function SearchInput(props) {
  const PhotoRend = {
<<<<<<< HEAD
      photos: props.data,
      // page: 1,
      // per_page: 8,
      // isLoading: false
    };
  

    return (
      <div>
        <Grid style={{display:'flex',marginTop: '15px', marginBottom: '15px'}}>
        {props.data.map(photo => {
        return (
        <Card>
          <CardActionArea>
          <CardMedia>
        <img src={photo.urls.small} />
        
        </CardMedia>
        </CardActionArea>
        </Card>
      
      )
      
    })}
    </Grid>
     </div>
    );
  }
=======
    photos: props.data,
    page: 1,
    per_page: 8,
    isLoading: false
  };


  return (
    <div>{
      props.data.map(photo => {
        return (

          <img src={photo.urls.small} />

        )
      })
    }</div>
  );
}

>>>>>>> 2825876673ad4f417e8a7fcf21c8ff62018bf72c


