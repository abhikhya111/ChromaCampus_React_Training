import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Homepage from './components/Homepage';
import Category from './components/Category';
import SubCategory from './components/SubCategory';
import ShowProduct from './components/ShowProduct';
import Career from './components/Career';
import AboutUs from './components/AboutUs';
import Csr from './components/Csr';
import Geographical from './components/Geographical';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Newsandblogs from './components/Newsandblogs';
import ProductBase from './components/ShowProduct';
import ProductDetails from './components/ProductDetails';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   const { data } = await axios.get(`http://localhost:8000/api/getCategories`);
  //   setData(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (<>
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/subCategory/:id" element={<SubCategory/>}/>
          <Route path='/productBase/:id' element={<ShowProduct />} />
          <Route path="/productDetails/:id" element={<ProductDetails/>}/>
          <Route path='/career' element={<Career />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path="/news-and-blogs" element={<Newsandblogs/>} />
          <Route path='/csr' element={<Csr />} />
          <Route path='/geographical-presence' element={<Geographical />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/productBase' element={<ProductBase />} />
        

        </Routes>
      </Router>
    </div>
  </>
  );
}



