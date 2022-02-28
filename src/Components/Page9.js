import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display:"flex",
    justifyContent:'center',
    height:'100vh',
    alignItems:'center',
    width: '100%',
  },
});

export default function Page9() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Typography variant="h2" color="primary">
        Thank You 
      </Typography>
    </div>
  );
}