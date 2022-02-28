import { TableCell, TableRow, makeStyles} from '@material-ui/core';
import React from 'react';
const useStyles=makeStyles((theme)=> ({
    cell :{
        fontSize:'25px'
    }
}))
export default function TableItem({serial, name,type,defaultValue}) {
    const classes=useStyles();
  return (<TableRow>
         <TableCell className={classes.cell}>{serial} {name}</TableCell>
         <TableCell className={classes.cell}>{type}</TableCell>
         <TableCell className={classes.cell}>{defaultValue}</TableCell>
  </TableRow>);
}
