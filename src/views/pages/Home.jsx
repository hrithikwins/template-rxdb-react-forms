import React from 'react';
import { Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppBarDrawer from 'component/DashBoard/AppBar';
import DashBoard from 'views/dashboard/DashBoard';
import Data from 'views/Data/Data';
import HomeBackground from 'images/home-background.png';
import createRoutes from 'route';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `url(${HomeBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',

  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

   let { path, url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <CssBaseline />

          <AppBarDrawer/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path={`${path}/dashboard`} component={DashBoard} />
          <Route path={`${path}/data`} component={Data} />
          <Route path={`${path}/transaction`} component={Data} />
          <Route path={`${path}/barcode`} component={Data} />
          <Route path={`${path}/report`} component={Data} />
          <Route path={`${path}/data`} component={Data} />
          <Route path={`${path}/data`} component={Data} />
          <Route path={`${path}/data`} component={Data} />
          <Route path={`${path}/data`} component={Data} />

        </Switch>

      </main>
    </div>
  );
}
