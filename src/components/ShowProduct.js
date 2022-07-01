import React, {useState, useEffect} from 'react';
import './ProductBase.css';
import Header from '../Header';
import Footer from '../Footer';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Row, Col, Navbar, Card, Nav, Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { Rings } from 'react-loader-spinner';
import './ShowProduct.css';

export default function ProductBase() {
    let navigate = useNavigate();
    const location = useLocation();

    const [product, setProduct] = useState([]);
    async function getProducts(id) {
        try {
    
          const products = await axios.get(`http://localhost:8000/api/getProducts/${location.state.id}`)
          console.log(products.data);
          setProduct(products.data);
          // navigate(`/subCategory/${id}`,{state:{id:id}});
    
          
        }
        catch (error) {
          console.log(error);
        }
        
      }

      async function getProductDetails(id) {
        try {
    
          // const subCategory = await axios.get(`http://localhost:8000/api/getSubCategories/${id}`)
          // console.log(subCategory.data);
          // setCategories(categories2.data);
          navigate(`/productDetails/${id}`,{state:{id:id}});
    
          
        }
        catch (error) {
          console.log(error);
        }
        
      }

      useEffect(() => {
        getProducts();
      }, []);
    return (
        <div className=''>
            <Header />
            <h1>Sub Categories</h1>
            <div className="sidebarSearch">
              <div className="sidebarSearchContainer">
                <SearchIcon className='search-icon' />
                <input type="text" className="search-input" placeholder="Search product" />
              </div>
            </div>
            <div className="flex-container p-5">
        {/* {product.map((products) => (
          <Card 
        //   onClick={getSubCategories.bind(this, products.id)} 
          
        //   data-id={products.id} style={{ width: '18rem', padding: '20px' }}
        >
            <Card.Img variant="top" src={products.image} className="productImage"/>
            <Card.Body>
              <Card.Text>
                <p className='productsName' >{products.name}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))} */}

<div className="flex-container">
        {product.length > 0 ? product.map((products) => (

          <Card
            onClick={getProductDetails.bind(this, products.id)}

            data-id={products.id} 
            style={{ width: '18rem', padding: '20px' }}>
            <Card.Img variant="top" src={products.image} />
            <Card.Body>
              <Card.Text>
                <p className='categoryName' >{products.name}</p>
              </Card.Text>
            </Card.Body>

          </Card>

        ))
          : <Rings color="#00BFFF" height={80} width={100} />}
      </div>
      </div>
            <Footer />
        </div>
    )
}