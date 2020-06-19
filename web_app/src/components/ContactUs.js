import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const ContactUs = () => {
    const classes = useStyles();
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        desc:""
    })

    const {name,email,phone,desc}=formData;

    const onChange=e=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        const userInfo={
            name,
            email,
            phone,
            desc
        }
        try {
            const body=JSON.stringify(userInfo);
            const response=await axios.post('https://fxg9yclev2.execute-api.us-east-2.amazonaws.com/my_deployment/contact-me',body).then(function (response) {
                if (response.data.statusCode == 500){
                    alert("Service side error"+response.data.error);
                }
                else{
                    alert("Your request has been submitted succesfully. We will contact you soon.");
                } 
              })
              .catch(function (error) {
                console.log(error);
              });

        } catch (err) {
            alert("There is an error while submitting your request")
            console.log(err)
        }
    }

    return (  
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        <form className={classes.form} required onSubmit={(e)=>onSubmit(e)}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={(e)=>onChange(e)}
            autoComplete="name"
            autoFocus
            
            
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e)=>onChange(e)}
            autoComplete="email"
            autoFocus
           
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            value={phone}
            onChange={(e)=>onChange(e)}
            autoComplete="phone"
            autoFocus
           
          />
          <TextField
          id="outlined-multiline"
          label="Provide your message here"
          fullWidth
          multiline
          rows={4}
          name="desc"
          value={desc}
          onChange={(e)=>onChange(e)}
          variant="outlined"
          autoFocus
        />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          
        </form>
      </div>
        
    </Container>
        
    )
}

export default ContactUs;




