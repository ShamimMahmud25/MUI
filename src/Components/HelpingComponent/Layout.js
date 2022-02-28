import { Drawer, Grid, makeStyles } from "@material-ui/core";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import PagesIcon from "@material-ui/icons/Pages";
import HomeIcon from "@material-ui/icons/Home";
import { useNavigate,useLocation } from "react-router-dom";
import React from "react";
// import './layout.css'
const drawerWidth = 240;
const useStyles = makeStyles({
  content: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
    fontSize:'25px'
  },
  menuItem : {
      marginTop: '40px'
  },
  active :{
    background:"gray"
  }
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useNavigate();
  const location=useLocation();
  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon color="primary" />,
      path: "/",
    },
    {
      text: "Page1",
      icon: <PagesIcon color="primary" />,
      path: "/page1",
    },
    {
      text: "Page2",
      icon: <PagesIcon color="primary" />,
      path: "/page2",
    },
    {
      text: "Page3",
      icon: <PagesIcon color="primary" />,
      path: "/page3",
    },
    {
      text: "Page4",
      icon: <PagesIcon color="primary" />,
      path: "/page4",
    },
    {
      text: "Page5",
      icon: <PagesIcon color="primary" />,
      path: "/page5",
    },
    {
      text: "Page6",
      icon: <PagesIcon color="primary" />,
      path: "/page6",
    },
    {
      text: "Page7",
      icon: <PagesIcon color="primary" />,
      path: "/page7",
    },
    {
      text: "Page8",
      icon: <PagesIcon color="primary" />,
      path: "/page8",
    },
    {
      text: "Page9",
      icon: <PagesIcon color="primary" />,
      path: "/page9",
    }
  ];
  return (
    <Grid className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem className={`${classes.menuItem} ${location.pathname===item.path ? classes.active: null}`} key={item.text} button onClick={()=>history(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Grid className={classes.content}>{children}</Grid>
    </Grid>
  );
}
