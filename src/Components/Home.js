import React from 'react';

import {Grid, Typography, makeStyles} from '@material-ui/core';
const useStyles=makeStyles((theme)=>({
    homepage : {
       display: "grid",
       justifyContent: 'center',
       alignItems: 'center',
       height:'800px'
    },
    nameText : {
          textAlign:"right",
          color:"000000",
          fontSize:"35px"
    }
}));

export default function Home() {
    const classes=useStyles();
  return <Grid className={classes.homepage}>
       <Typography  variant="h3" color="primary" >
           How To Design User Interface Using Material UI.
       </Typography>
       <Typography variant="h4" className={classes.nameText} >
           --presented by Shamim Mahmud
       </Typography>

  </Grid>
}
