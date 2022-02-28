import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';
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

export default function Page6() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.header}>
          Handling clicks
        </Typography>
      </Grid>
      <Grid item className={classes.root} xs={12}>
        <Button
          onClick={() => {
            alert("clicked");
          }}
          variant="contained"
          color='primary'
        >
          Click me
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.header}>
        Buttons with icons and label
        </Typography>
      </Grid>
      <Grid item className={classes.root} xs={12}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      </Grid>
    </Grid>
  );
}
