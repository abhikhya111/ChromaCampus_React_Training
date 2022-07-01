import React from 'react';
import Category1 from './Category1.png';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { Card, Button } from 'react-bootstrap';
import Footer from '../Footer';
import './ProductDetails.css';
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function ProductDetails() {

    const changeImage = () => {
        alert()
    }

    const [categories, setCategories] = useState([]);
    useEffect = (() => {
        alert('hi');
        async function getAllCategories(){
            try{
                const categories = await axios.get('http://localhost:8000/api/getCategories')
                console.log(categories.data);
                setCategories(categories.data);
            }
            catch(error) {
                console.log(error);
            }
        }

        getAllCategories();
    },[]);
  return (
    <div>
         <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                    <SearchIcon className='search-icon'/>
                    <input type="text" className="search-input" placeholder="Search product"/>
                </div>
        </div>

        <div className="flex-container">
    <Card style={{ width: '18rem' , padding: '20px'  }}>
        <Card.Body>
        <ul className='categoryList'>
                <li>Product categories</li>
                <li>Abrasives</li>
                <li>Router bits</li>
            </ul>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Body>
        <ul className='categoryList'>
                <li>Product categories</li>
                <li>Abrasives</li>
                <li>Router bits</li>
            </ul>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Body>
        <ul className='categoryList'>
                <li>Product categories</li>
                <li>Abrasives</li>
                <li>Router bits</li>
            </ul>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Body>
        <ul className='categoryList'>
                <li>Product categories</li>
                <li>Abrasives</li>
                <li>Router bits</li>
            </ul>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem', padding: '20px' }}>
        <Card.Body>
        <ul className='categoryList'>
                <li>Product categories</li>
                <li>Abrasives</li>
                <li>Router bits</li>
            </ul>
        </Card.Body>
    </Card>

    </div>
    <hr></hr>
  

 
    <div className="flex-container">
  
    <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Img variant="top" src={Category1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p className='categoryName'>Power tools</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Img variant="top" src={Category1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p className='categoryName'>Welding Machine</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Img variant="top" src={Category1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p className='categoryName'>Vaccume Cleaner</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem', padding: '20px' }}>
        <Card.Img variant="top" src={Category1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p className='categoryName'>Pressure Washer</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    </div>
    <div className="flex-container">
  
  <Card style={{ width: '18rem' , padding: '20px' }}>
      <Card.Img variant="top" src={Category1} />
      <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          <p className='categoryName'>Power tools</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
      </Card.Body>
  </Card>

  <Card style={{ width: '18rem' , padding: '20px' }}>
      <Card.Img variant="top" src={Category1} />
      <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          <p className='categoryName'>Welding Machine</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
      </Card.Body>
  </Card>

  <Card style={{ width: '18rem' , padding: '20px' }}>
      <Card.Img variant="top" src={Category1} />
      <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          <p className='categoryName'>Vaccume Cleaner</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
      </Card.Body>
  </Card>

  <Card style={{ width: '18rem', padding: '20px' }}>
      <Card.Img variant="top" src={Category1} />
      <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          <p className='categoryName'>Pressure Washer</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
      </Card.Body>
  </Card>

  </div>
    <div className="flex-container">
      <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Img variant="top" src={Category1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p className='categoryName'>Power tools</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Img variant="top" src={Category1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p className='categoryName'>Welding Machine</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , padding: '20px' }}>
        <Card.Img variant="top" src={Category1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p className='categoryName'>Vaccume Cleaner</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem', padding: '20px' }}>
        <Card.Img variant="top" src={Category1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p className='categoryName'>Pressure Washer</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    </div>
    
       
       
    <div ><Footer/></div>
        

    </div>
  )
}
