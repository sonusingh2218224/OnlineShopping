
import React, { useState , useEffect, useContext} from 'react'
import { Table , Button, Row , Col} from 'react-bootstrap';
import {http, httpFile} from "../../../Config/axiosConfig"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {CartContext} from "../../App"
import Cart from '../cart/Cart';
function ProductData() {
  const { cart, setCart } = useContext(CartContext);
    const [products, setProducts]=useState(null);
    const [refresh, setRefresh]=useState(false);
    const navigator=useNavigate();
  
      useEffect(() => {
        http("newProducts").then(res=>setProducts(res.data))
        .catch(err=>console.log(err.message))
      
       
      }, [refresh])

     



//cart
 const handleCart = product => {
    const newCartItems = { ...cart };
    newCartItems.items = [...cart.items, {...product, qty:1}];
    setCart(newCartItems);
  };




       const handleDelete = id => {
          Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    http.delete(`newProducts/${id}`).then(res=>{
      if(res.status==200){
        Swal.fire(
      'Deleted!',
      'Your Proudcut  has been deleted.',
      'success'
    )
    setRefresh(!refresh)
      }
    }).catch(err=>{
      Swal.fire("oops ", "something went wrong")
    })
    
  }
})
        };

      


//edit 
const editHandle=(e)=>{
console.log(e)

}

   console.log(products)
  return (
    <div>
       
         <Row>
           <Col xs={12} lg={8}>
             <Table  striped hover      >
         
                 <thead  >
    <tr style={{border:"2px solid red"}}   >
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th> 
      <th scope="col">Description</th> 
      <th scope="col" >Actions</th> 


      {/* <th scope="col">Images</th> */}
      
    </tr>
  
  </thead>
               
               <tbody>
                   {
                       products?.map(pro=>(
                           <tr >
                               
                               <td>{pro._id}</td>
                               <td>{pro.name}</td>
                               <td>{pro.price}</td>
                                <td>{pro.description}</td>
                                <td>{pro.images}</td>
                                 <td>
                <Button variant="secondary"   onClick={()=>navigator(`${pro._id}`)}>Edit</Button>
                <Button variant="danger"  onClick={() => handleDelete(pro._id)}>
                  Delete
                </Button>
                <Button variant="info" onClick={() => handleCart(pro)}>
                  Add To Cart
                </Button>
              </td>
                               
                           </tr>
                           
                       ))
                   }
               </tbody>
               
        </Table>


           </Col>
           <Col xs={12} lg={4}>
             <Cart/>
           </Col>
         </Row>

    </div>
  )
}

export default ProductData