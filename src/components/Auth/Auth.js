import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

import useStyles from './styles';
import Input from './Input';

const Auth = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [isSignUp, setIsSignUp] = useState(false);
   const classes = useStyles();

   const handleShowPassword = ()=> setShowPassword((prevShowPassword)=>!prevShowPassword);

   const handleSubmit = ()=>{

   }

   const handleChange = ()=>{

   }


   const switchMode = ()=>{
    setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
    handleShowPassword(false);
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
                            <Grid container spacing={2} >
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
            <Grid container justify="flex-end">
                <Grid item >
                    <Button onClick={switchMode}>
                        {isSignUp?"Already hane an Account? Sign In" : "Don't have an Account? Sign Up"}
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Paper>
   </Container>
  )
}

export default Auth