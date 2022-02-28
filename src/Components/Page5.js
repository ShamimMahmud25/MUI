import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: "30px",
    "& > *": {
      margin: theme.spacing(4),

      width: "200px",
      height: "100px",
      fontSize: "25px",
    },
  },
  header: {
    textAlign: "center",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    fontWeight: "500",
    wrap: "wrap",
  },
}));

export default function Page5() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.header}>
          Contained Buttons
        </Typography>
      </Grid>
      <Grid item className={classes.root} xs={12}>
        <Button variant="contained" size="large">
          Default
        </Button>
        <Button variant="contained" size="large" color="primary">
          Primary
        </Button>
        <Button variant="contained" size="large" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" size="large" disabled>
          Disabled
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          href="#contained-buttons"
        >
          Link
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          Disable elevation
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.header}>
          Text Buttons
        </Typography>
      </Grid>
      <Grid item className={classes.root} xs={12}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons" color="primary">
          Link
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.header}>
          Outlined Buttons
        </Typography>
      </Grid>
      <Grid item className={classes.root} xs={12}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </Grid>
    </Grid>
  );
}
