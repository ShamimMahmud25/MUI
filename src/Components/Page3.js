import React from "react";

import {
  Grid,
  Typography,
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableBody,
} from "@material-ui/core";
import TableItem from "./HelpingComponent/TableItem";
const useStyles = makeStyles((theme) => ({
  homepage: {
    display: "grid",
    marginTop: "50px",
  },
  header: {
    textAlign: "center",
    marginBottom: "100px",
  },
  Item: {
    textAlign: "left",
    fontWeight: "bold",
    paddingLeft: "20px",
  },
  tableHeading: {
    textAlign: "center",
    marginTop: "25px",
    marginBottom: "25px",
    fontWeight: "bold",
    color: "black",
  },
}));

export default function Page1() {
  const classes = useStyles();
  return (
    <Grid className={classes.homepage}>
      <Grid>
        <Typography variant="h3" color="primary" className={classes.header}>
          Grid
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h5" className={classes.Item}>
          import Grid from '@material-ui/core/Grid';
        </Typography>
        <Typography variant="h5" className={classes.Item}>
          import {"{Grid}"} from '@material-ui/core';
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h4" className={classes.tableHeading}>
          Props
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableItem name="Name" type="type" defaultValue="default" />
            </TableHead>
            <TableBody>
              <TableItem
                serial="1"
                name="component"
                type="elementType"
                defaultValue="div"
              />
              <TableItem
                serial="2"
                name="container"
                type="bool"
                defaultValue="false"
              />
              <TableItem
                serial="3"
                name="item"
                type="bool"
                defaultValue="false"
              />
              <TableItem
                serial="4"
                name="justifyContent"
                type="flex-start/space-around/spce-between"
                defaultValue="flex-start"
              />
              <TableItem
                serial="5"
                name="spacing"
                type="0/1/2.../10"
                defaultValue="0 (can only be used on a type container component.)"
              />
               <TableItem
                serial="6"
                name="sm, small"
                type="auto/number/bool"
                defaultValue="false (600px screen)"
              />
               <TableItem
                serial="7"
                name="md, medium"
                type="auto/number/bool"
                defaultValue="false (900px screen)"
              />
               <TableItem
                serial="8"
                name="lg, large"
                type="auto/number/bool"
                defaultValue="false (1200px screen)"
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
