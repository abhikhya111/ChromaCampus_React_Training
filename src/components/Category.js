import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Card, Button } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import './ProductDetails.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Category.css';
import { useNavigate } from "react-router-dom";
import { Rings } from 'react-loader-spinner';

export default function Category() {

  let navigate = useNavigate();


  const [categories, setCategories] = useState([]);
  async function getAllCategories() {
    try {
      const categories = await axios.get('http://localhost:8000/api/getCategory')
      console.log(categories.data);
      setCategories(categories.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  async function getSubCategories(id) {
    try {

      // const subCategory = await axios.get(`http://localhost:8000/api/getSubCategories/${id}`)
      // console.log(subCategory.data);
      // setCategories(categories2.data);
      navigate(`/subCategory/${id}`, { state: { id: id } });


    }
    catch (error) {
      console.log(error);
    }

  }



  useEffect(() => {
    setTimeout(() => {
      getAllCategories();
    }, 2000);
  }, [])
  return (
    <div>
      <Header />
      <h1>Categories</h1>
      <div className="sidebarSearch">
        <div className="sidebarSearchContainer">
          <SearchIcon className='search-icon' />
          <input type="text" className="search-input" placeholder="Search product" />
        </div>
      </div>
      <div className="flex-container">
        {categories.length > 0 ? categories.map((category) => (

          <Card
            onClick={getSubCategories.bind(this, category.id)}

            data-id={category.id} style={{ width: '18rem', padding: '20px' }}>
            <Card.Img variant="top" src={category.image} />
            <Card.Body>
              <Card.Text>
                <p className='categoryName' >{category.name}</p>
              </Card.Text>
            </Card.Body>

          </Card>

        ))
          : <Rings color="#00BFFF" height={80} width={100} />}
      </div>
      <Footer />
    </div>
  )
}
