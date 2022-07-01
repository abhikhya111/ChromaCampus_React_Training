import React from 'react';
import './ProductDetails.css';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import { Card, Button } from 'react-bootstrap';
import { Rings } from  'react-loader-spinner';

export default function SubCategory(props) {
  let navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [subCategory, setSubcategory] = useState([]);

  const location = useLocation();
  async function getSubCategories(id) {
    try {

      const subCategory = await axios.get(`http://localhost:8000/api/getSubCategories/${location.state.id}`)
      console.log(subCategory.data);
      setSubcategory(subCategory.data);
      // navigate(`/subCategory/${id}`,{state:{id:id}});

      
    }
    catch (error) {
      console.log(error);
    }
    
  }

  async function getProducts(id) {
    try {

      // const subCategory = await axios.get(`http://localhost:8000/api/getSubCategories/${id}`)
      // console.log(subCategory.data);
      // setCategories(categories2.data);
      navigate(`/productBase/${id}`,{state:{id:id}});

      
    }
    catch (error) {
      console.log(error);
    }
    
  }
  useEffect(() => {
    setTimeout(() => {
    getSubCategories();
  }, 2000);
  }, []);
  return (
  <div>
    <Header />
     <h1>SubCategories</h1>
    <div className="sidebarSearch">
      <div className="sidebarSearchContainer">
        <SearchIcon className='search-icon' />
        <input type="text" className="search-input" placeholder="Search product" />
      </div>
    </div>
    <div className="flex-container">
      {subCategory.length >0 ? subCategory.map((category) => (
        <Card 
        onClick={getProducts.bind(this, category.id)} 
        
        data-id={category.id} style={{ width: '18rem', padding: '20px' }}>
          <Card.Img variant="top" src={category.image} />
          <Card.Body>
            <Card.Text>
              <p className='categoryName' >{category.name}</p>
            </Card.Text>
          </Card.Body>
          
        </Card>
      ))
      : <Rings color="#00BFFF" height={80} width={100} />
    }
    </div>
   
      
    <Footer />
    
  </div>
  )
}