import axios from 'axios';

// import React from 'react'


const URL='http://localhost:8000';

export const addUser = async(data) => {

    try {
         return await axios.post(`${URL}/add`,data); 
    } catch (error) {

        console.log('error while calling',error)
        
    }
  
}


export const getUsers= async ()=>{

    try {
        
        return await axios.get (`${URL}/all`);
        
    } catch (error) {

        console.log('error while calling getUsers API',error);
        
    }

}




export  const getUser = async (id) => {
  
    try {
        return await axios.get(`${URL}/${id}`)
        
    } catch (error) {

        console.log('error while calling getUser api',error);
        
    }
}


export const editUser = async (user , id) =>{

    try {
        return await axios.put( `${URL}/${id}` ,user  );
        
    } catch (error) {

        console.log('error while calling edituser api',error);
        
    }

}

export const deleteUser = async (id) =>{

    try {

        return await axios.delete(`${URL}/${id}`);

        
    } catch (error) {

        console.log('error while calling delete user api ',error);
        
    }



}


