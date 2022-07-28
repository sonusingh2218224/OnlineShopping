
import React from 'react'
import { Form  , Button} from 'react-bootstrap';
import {http} from '../../../Config/axiosConfig';

function User() {

    const  HandleSubmitUser=e=>{
       e.preventDefault();
       console.log("form submitted")
       let data=new FormData(e.target);
       http.post("userD", data,{
           headers:{
               "Content-Type":"multipart/form-data"
           }
       })
   }

   

   

  return (
    <div className='container bg-dark'>


        
       <Form className='bg-grey text-white mt-4' onSubmit={HandleSubmitUser}>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control name="name" type="text" placeholder="Enter Name" />
    
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type='submit'  >Submit</Button>

  
</Form>
  

    </div>
  )
}

export default User;