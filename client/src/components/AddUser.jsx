import {useState} from 'react'
import {FormControl,FormGroup,InputLabel,Input, Typography,styled,Button} from '@mui/material'; 
import{addUser} from '../service/api'

import {useNavigate } from 'react-router-dom';


const Container =styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
// formcontrol is a div bts
& > div{
  margin-top: 20px;
}

`;


const defaultval=
{

  name:"",
  username:"",
  email:"",
  phone:""
}


const AddUser = () => {

  const[user,setUser]= useState(defaultval);

  const navigate= useNavigate();



  const onValueChange = (event)=>{
    // console.log(event.target.name,event.target.value);

    setUser({...user, [event.target.name ]: event.target.value})
  }

  const addUserDetails =  async()=>{

    await addUser(user);

    navigate('/all' );

  }

  

  


  return (
   <Container>
    <Typography variant='h4'>Add User</Typography>

    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(event)=>onValueChange(event)}  name="name" />
    </FormControl>

    <FormControl>
        <InputLabel>Username </InputLabel>
        <Input onChange={(event)=>onValueChange(event)}  name="username" />
    </FormControl>

    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(event)=>onValueChange(event)} name="email" />
    </FormControl>

    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(event)=>onValueChange(event)}  name="phone"   />
    </FormControl>

    <FormControl> 
      <Button variant='contained'  onClick={()=> addUserDetails()}>Add user</Button>
    </FormControl>

  
      
   </Container>
  )
}

export default AddUser

