import React from "react";
import { Card, CardActionArea, Grid } from "@material-ui/core";


import CardMedia from '@material-ui/core/CardMedia';

export default function SearchInput(props) {

  return (
    <div>
      <Grid style={{ display: 'flex', marginTop: '15px', marginBottom: '15px' }}>
        {props.data.map(photo => {
<<<<<<< HEAD
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
=======
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
>>>>>>> a83a163f6b64bd0cb77f5819e0540b5fa9b2cd5e


