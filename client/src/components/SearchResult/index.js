import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";


export default function SearchInput(props) {
  const PhotoRend = {
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

  

