import React from 'react';

import {Grid, Typography, makeStyles} from '@material-ui/core';
const useStyles=makeStyles((theme)=>({
    homepage : {
       display: "grid",
       justifyContent: 'center',
       alignItems: 'center',
       marginTop:'100px'
    },
    header : {
          textAlign:'center',
          marginBottom: "100px"
          
    },
    answerText :{
        padding:'100px',
        fontSize:'35px'
    }
}));

export default function Page1() {
    const classes=useStyles();
  return <Grid className={classes.homepage}>
      <Grid>
       <Typography  variant="h3" color="primary"className={classes.header}>
           What is  Material-UI ?
       </Typography>
       </Grid>
       <Grid>
       <Typography variant="h4" className={classes.answerText} >
       Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications
       </Typography>
       </Grid>

  </Grid>
}
