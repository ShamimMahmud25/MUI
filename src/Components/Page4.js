import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "blue",
    color: "white",
    fontSize: "35px",
    height: "100px",
    fontWeight: "bold",
  },
  infoText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    border: "1px solid red",
    flexWrap: "wrap",
  },
  text: {
    padding: "10px",
    fontSize: "25px",
    color: "black",
    fontWeight: "bold",
  },
  space: {
    width: "100%",
    height: "100px",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item4</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item5</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item6</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item7</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item7</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item8</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item9</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item10</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item11</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>Item12</Paper>
        </Grid>
       
      </Grid>
    </Grid>
  );
}
