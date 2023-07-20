import {useState,useEffect} from 'react'
import {FormControl,FormGroup,InputLabel,Input, Typography,styled,Button} from '@mui/material'; 
import{editUser, getUsers, getUser} from '../service/api'

import {useNavigate,useParams } from 'react-router-dom';


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


const EditUser = () => {

  const[user,setUser]= useState(defaultval);

  const navigate= useNavigate();

  const {id} = useParams();

  useEffect(()=>{
    loadUserDetails();
  },[])




  const loadUserDetails = async () =>{
     
    const response = await getUser(id);
    setUser(response.data);



  }



  const onValueChange = (event)=>{
    // console.log(event.target.name,event.target.value);

    setUser({...user, [event.target.name ]: event.target.value})
  }

  const editUserDetails =  async()=>{

    await editUser(user,id);

    navigate('/all' );

  }




  

  


  return (
   <Container>
    <Typography variant='h4'>Edit user</Typography>

    <FormControl>
        <InputLabel>name</InputLabel>
        <Input onChange={(event)=>onValueChange(event)}  name="name" value={user.name} />
    </FormControl>

    <FormControl>
        <InputLabel>username </InputLabel>
        <Input onChange={(event)=>onValueChange(event)}  name="username" value={user.username} />
    </FormControl>

    <FormControl>
        <InputLabel>email</InputLabel>
        <Input onChange={(event)=>onValueChange(event)} name="email"  value={user.email} />
    </FormControl>

    <FormControl>
        <InputLabel>phone</InputLabel>
        <Input onChange={(event)=>onValueChange(event)}  name="phone"  value={user.phone} />
    </FormControl>

    <FormControl> 
      <Button variant='contained'  onClick={()=> editUserDetails()}>Edit user</Button>
    </FormControl>

  
      
   </Container>
  )
}

export default EditUser;

