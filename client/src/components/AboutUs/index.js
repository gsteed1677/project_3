import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  style: {
  background: 'linear-gradient(30deg, #1b5e20 30%, #81c784 90%)',
  width: theme.spacing(7),
  height: theme.spacing(7),
  }
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="https://github.com/amoseman1">
      <Avatar className={classes.style}>AM</Avatar>
      </Link>

      <Link href="https://www.linkedin.com/in/amy-moseman-7867a9158/">
      <LinkedInIcon fontSize="medium"></LinkedInIcon>
      Amy Moseman
      </Link>
      
      <Link href="https://github.com/alexaergun">
      <Avatar className={classes.style}>AE</Avatar>
     </Link>

     <Link href="https://www.linkedin.com/in/alexaergun/">
      <LinkedInIcon fontSize="medium"></LinkedInIcon>
      Alexa Atwell
      </Link>

     <Link href="https://github.com/enevarez-ops">
      <Avatar className={classes.style}>EN</Avatar>
      </Link>

    <Link href="https://www.linkedin.com/in/efrainnevarez/">
      <LinkedInIcon fontSize="medium"></LinkedInIcon>
      Efrain Nevarez
      </Link>

      <Link href="https://github.com/gsteed1677">
      <Avatar className={classes.style}>GS</Avatar>
      </Link>

      <Link href="https://www.linkedin.com/in/garrett-steed/">
      <LinkedInIcon fontSize="medium"></LinkedInIcon>
      Garrett Steed
      </Link>
    </div>
  );
}