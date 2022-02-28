import React, {useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    padding: "5px",
    height: '500px'
  },
  header: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    fontWeight: "500",
    wrap: "wrap",
  },
  loading: {
    color: "red",
  },
  continueButton: {
    backgroundColor: "blue",
    width: "150px",
    height: "42px",
    borderRadius: "2px",
    fontFamily: "SFProDisplay",
    lineHeight: "normal",
    fontWeight: "bold",
    letterSpacing: "1.25px",
    fontSize: "14px",
    marginLeft:"200px"
  },
  Linear :{
      width:'800px',
      color:"blue",
      left:'0px',
      top:'20px',
      marginTop:"200px",
      position:'relative',
      marginRight:"20px"
  }
}));

export default function Page8() {
  const classes = useStyles();
  const [loading,setLoading]= useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 2;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleClick=()=>{
      setLoading(true);
      setTimeout(()=>{
       setLoading(false);
      },4000);
  }

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.header}>
          CircularProgress
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
        item
        xs={12}
      >
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.loading}
          size={24}
          thickness={4}
        />
      </Grid>
      <Grid item>
      <Button
              className={classes.continueButton}
              variant="contained"
              color="primary"
              disableElevation
              disabled={loading}
              onClick={handleClick}
            >
              {loading ? (
                <CircularProgress
                  variant="indeterminate"
                  disableShrink
                  className={classes.loading}
                  size={24}
                  thickness={5}
                />
              ) : (
                "Continue"
              )}
            </Button>
      </Grid>
      <Grid item>
      <LinearProgress className={classes.Linear} variant="determinate" value={progress} />
      </Grid>
    </Grid>
  );
}
