import React from "react";
import { Card, CardActionArea, Grid } from "@material-ui/core";


import CardMedia from '@material-ui/core/CardMedia';

export default function SearchInput(props) {

  return (
    <div>
      <Grid style={{ display: 'flex', marginTop: '15px', marginBottom: '15px' }}>
        {props.data.map(photo => {
          return (
            <Card>
              <CardActionArea>
                <CardMedia>
                  <img src={photo.urls.small} alt="search" />

                </CardMedia>
              </CardActionArea>
            </Card>

          )

        })}
      </Grid>
    </div>
  );
}


