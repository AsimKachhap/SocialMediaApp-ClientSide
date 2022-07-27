import React, {useEffect} from 'react';
import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form.js'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import memories from './images/memories.png';
import useStyles from './styles';

function App() {

  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(()=>{
      dispatch(getPosts());
  },[dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appbar} position="static" color="inherit">
       <Typography className={classes.heading} varient="h2" align="center">Memories</Typography>
        <img  className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;