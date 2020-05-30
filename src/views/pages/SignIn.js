import React from 'react';
import clsx from 'clsx';
import {useHistory} from 'react-router-dom';
// material ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link as LinkedTag from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Clock from 'react-live-clock';
// components
import loginBackground from "images/login-background.jpg";



function BottomInfo() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Logging in as system Administrator'}
      <br ></br>
      {'Current Time:'}<Clock format={'HH:mm:ss'} ticking={true} timezone={'India/Asia'} />
    <br ></br>
      {' Date: '}
      {new Date().getDate()}
      {'-'}
      {new Date().getMonth()+1}
      {'-'}
      {new Date().getFullYear()}
    </Typography>
  );
}//BottomInfo()




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    overflowY: 'hidden'
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${loginBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "100vh",
    width: "100vw"
  },
  paperCard: {
    backgroundColor: '#ffffdd',
    margin: theme.spacing(8, 4),
    padding: theme.spacing(8,6)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    borderRadius: '20px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));//end of makeStyles()

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();


  function handleSignIn() {
    alert('checking credentials');
    history.push("/home");

  }//handleSignIn()

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square className={classes.image}>
        <Grid item xs={12} sm={12} md={6} className={classes.paperCard}>
          <Typography component="h1" variant="h5">
            <Box component="span" className={classes.avatar}>
              <LockOutlinedIcon />
            </Box>
            Welcome System Admin please verify your credentials
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSignIn}
                >
                  login
                </Button>
            <Box mt={5}>
              <BottomInfo />
            </Box>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
