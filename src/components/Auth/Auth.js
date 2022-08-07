import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

import useStyles from './styles';
import Input from './Input';

const Auth = () => {
   const [showPassword, setShowPassword] = useState(false);
   const classes = useStyles();
   const isSignUp = false;

   const handleShowPassword = ()=> setShowPassword((prevShowPassword)=>!prevShowPassword);

   const handleSubmit = ()=>{

   }

   const handleChange = ()=>{

   }


  return (
   <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? 'SignUp' : 'SignIn' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {
                    isSignUp &&(
                        <>
                            <Grid xs={6} md={12} >
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange}  half />
                            </Grid>
                        </>
                    )
                }
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password" } handleshowPassword={handleShowPassword}/>
                {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                {isSignUp? "Sign Up" : "Sign In"}
            </Button>
        </form>
    </Paper>
   </Container>
  )
}

export default Auth