import React from "react";

import { Grid, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  homepage: {
    display: "grid",
    marginTop: "100px",
  },
  header: {
    textAlign: "center",
    marginBottom: "100px",
  },
  answerText: {
    paddingLeft: "100px",
    fontSize: "35px",
  },
  code :{
      paddingLeft:'100px'
  },
  warring : {
      color:'red',
      paddingLeft:'100px',
      paddingTop: "20px"
  }
}));

export default function Page1() {
  const classes = useStyles();
  return (
    <Grid className={classes.homepage}>
      <Grid>
        <Typography variant="h3" color="primary" className={classes.header}>
          How to use MUI ?
        </Typography>
      </Grid>
      <Grid >
      <Typography variant="h5" color="primary" className={classes.answerText}>
          {'//'} with npm 
        </Typography>
        <Typography variant="h4" className={classes.answerText}>
          npm install @material-ui/core
        </Typography>
        <Typography variant="h5" color="primary" className={classes.answerText}>
        {'//'}with yarn
        </Typography>
        <Typography variant="h4" className={classes.answerText}>
        yarn add @material-ui/core
        </Typography>
        <Typography variant="h4" className={classes.warring}>
        {'**'}Please note that react {'>='} 16.8.0 and react-dom {'>='}  16.8.0 are peer dependencies.
        </Typography>
      </Grid>
    </Grid>
  );
}
