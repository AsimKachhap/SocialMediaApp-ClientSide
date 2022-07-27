import React, {useState} from 'react';
import { TextField, Button, Typography,Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts.js';


const Form = () => {
    const [postData, setPostData]= useState({creator:'', title:'', message:'', tags:'', selectedFile:''});
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const onClick = ()=>{

    }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField name="creator"  variant="outlined"  fullWidth label="Creator"  value={postData.creator}  onChange={((e)=> setPostData({...postData, creator: e.target.value}))}/>
        <TextField name="title"  variant="outlined"  fullWidth label="Title" value={postData.title}  onChange={((e)=> setPostData({...postData, title: e.target.value}))}/>
        <TextField name="message"  variant="outlined"  fullWidth label="Message"  value={postData.message}  onChange={((e)=> setPostData({...postData, message: e.target.value}))}/>
        <TextField name="tags"  variant="outlined"  fullWidth label="Tags" value={postData.tags}  onChange={((e)=> setPostData({...postData, tags: e.target.value}))}/>
        <div className={classes.fileInput}> <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile:base64 })} /> </div>
        <Button className={classes.buttonSubmit} variant="contained"  fullWidth color="primary" size="large" type="submit">Submit</Button>
        <Button  variant="contained" fullWidth color="secondary" size="small" onClick={onClick}>Clear</Button>
      </form>
    </Paper>
  );
}

export default Form
