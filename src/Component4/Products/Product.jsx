

 import  React, { useEffect, useState } from 'react'
import {Form, Button} from "react-bootstrap"
import { useParams } from 'react-router-dom';
import {http, httpFile} from '../../../Config/axiosConfig';


function Product() {

 const [categories, setCategories]= useState(null)
const [MODE, setMODE]=useState("CREATE")

 
      let { id } = useParams();
      console.log('ID', id)
    const [formData, setFormData]=useState(null);



   const  HandleSubmit=e=>{
       e.preventDefault();
       console.log("form submitted")
       let data=new FormData(e.target);
       http.post("newProducts", data,{
           headers:{
               "Content-Type":"multipart/form-data"
           }
       })
   }

  


// console.log(categories)

  useEffect(()=>{
     http("categories").then(res=>setCategories(res.data.result))
   }, [])

   
  


  return (
    <div>
        <Form onSubmit={HandleSubmit} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control name="name" type="text" placeholder="Enter Name" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>price</Form.Label>
    <Form.Control  name="price"type="number" placeholder="Enter Price" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" type="text" placeholder="Enter Description" />
    
  </Form.Group>

             <Form.Label>Categories</Form.Label>
         <Form.Select name="category" aria-label='Default select example'>
            
            {categories?.map(category=>(
              <option value={category._id}>{category.name}</option>
            )) }
        </Form.Select> 


   

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image</Form.Label>
    <Form.Control name="images"type="file" placeholder="Upload Image" />
    
  </Form.Group>
  <Button variant="primary" type='submit' >Submit</Button>
  

  </Form>
    </div>
  )
}

export default Product