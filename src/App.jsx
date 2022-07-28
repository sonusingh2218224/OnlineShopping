import { useParams } from "react-router-dom";

import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component4/Navbar";
import Main from ".//Components3/Main";
import LoginForm from ".//Components3/Home";
import Person from "./Components1/Persons";
import UseEffectApi from ".//Components1/UseEffectApi";
import Student from ".//Components/students/Student";
import Avtar from ".//Components/Avtar/Avtar";
import AddCourse from "./Components3/AddCourse";
import Menus from "./Components3/Menus";
import AllCourses from "./Components3/AllCourses";
import Home from ".//Components3/Home";
import { Col, Container, Row } from "react-bootstrap";
import About from "./Components3/About";
import Page404 from "./Component4/Page404";
import Product from "./Component4/Products/Product";
import User from "./Component4/User/User";
import ProductData from "./Component4/Products/ProductData";
import LoginScreen from "./Component4/Screen/LoginScreen";


// useContext


export const CartContext = React.createContext();



function App() {
  const [cart, setCart] = useState({
    items: [],
  });

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>

 <Navbar />

      <Container>
        <Row>
          <Col  md={2}>
            <Menus />
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-course" element={<AllCourses />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product/>}/>
               <Route path="/user" element={<User/>}/> 
               <Route path="/productdata" element={<ProductData/>}/>
                <Route path="/login" element={<LoginScreen/>} />

              <Route path="/*" element={<Page404 />} />
            </Routes>
          </Col>
        </Row>
      </Container>

      {/* <Main />
      <AddCourse />
      <Menus />
      <AllCourses />
      <Home /> */}

      <Routes>
        <Route path="/student" element={<Student />} />

        <Route path="/avtar" element={<Avtar />} />
        <Route path="api" element={<UseEffectApi />} />

        <Route path="/loginform">
          <Route index element={<LoginForm />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/*" component={<Page404 />} />
      </Routes>

      </CartContext.Provider>
    
     
    </div>
  );
}

export default App;
