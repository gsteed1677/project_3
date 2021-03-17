import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import { Card, CardActionArea, Container, Grid } from "@material-ui/core";


import CardMedia from '@material-ui/core/CardMedia';


export default function SearchInput(props) {
  const PhotoRend = {
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
        <Card style={{display:'flex',marginTop: '15px', marginBottom: '15px'}}>
          
          <CardMedia >
        <img src={photo.urls.small} />
        
        </CardMedia>
      
        </Card>
      




      )
    })}
    </Grid>
     </div>
    );
  }


