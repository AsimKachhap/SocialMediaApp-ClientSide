import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { GoogleLogin } from '@react-oauth/google';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signin, signup} from '../../actions/auth';

import Icon from './icon';
import useStyles from './styles';
import Input from './Input';

const initialState={firstName:'', lastName:'', email:'', password:'', confirmPassword:''}

const Auth = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [isSignUp, setIsSignUp] = useState(false);
   const[formData, setFormData] = useState(initialState);
   const dispatch = useDispatch(); 
   const navigate = useNavigate();

   const classes = useStyles();

   const handleShowPassword = ()=> setShowPassword((prevShowPassword)=>!prevShowPassword);

   const handleSubmit = (e)=>{
    e.preventDefault();

    if(isSignUp){
        dispatch(signup(formData, navigate));
    }
    else{
        dispatch(signin(formData, navigate));
    }
    console.log(formData);
   }

   const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
   };


   const switchMode = ()=>{
    setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
    setShowPassword(false);
   }

   const googleSuccess = async (res)=>{
    const result = res?.profile.Obj;
    const token =  res?.tokenID;
    try {
        dispatch({type:'AUTH', data:{result,token}});
        navigate.pushState('/');
    } catch (error) {
        console.log(error);
    }
   }

   const googleFailure = ()=>{
    console.log('Google Sign In was unsuccessfull. try again later');
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

            <GoogleLogin
                       onSuccess={(response)=>googleSuccess(response)}
                       onError={()=>googleFailure} 
            />;   

            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                {isSignUp? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justifyContent="flex-end">
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