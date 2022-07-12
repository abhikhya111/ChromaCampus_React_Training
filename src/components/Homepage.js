import React, {useState, useEffect} from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import './Homepage.css';
import homeimg1 from './homeimg1.png';
import homeimg01 from './homeimg01.png';
import homeimg02 from './homeimg02.png';
import homeimg03 from './homeimg03.png';
import imgNav1 from './imgNav1.png';
import imgNav2 from './imgNav2.png';
import imgNav3 from './imgNav3.png';
import imgNav4 from './imgNav4.png';
import imgNav5 from './imgNav5.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TailSpin } from 'react-loader-spinner';

const Homepage = () => {
    const [feature, setFeaturedData] = useState([]);

    //Featured Products
    async function getAllFeatured() {
      try {
        const setFeatured = await axios.get('http://localhost:8000/api/getFeatured')
        console.log(setFeatured.data);
        setFeaturedData(setFeatured.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    //Quality Assurance
    const [quality, setQuality] = useState([]);
    async function getAllQualities() {
        try {
        const qualitydata = await axios.get('http://localhost:8000/api/getAssuranceData')
        console.log(qualitydata.data);
        setQuality(qualitydata.data);
        }
        catch (error) {
        console.log(error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
          getAllFeatured();
          getAllQualities();
        }, 2000);
      }, [])
    return (
        <div className='container-fluid'>
            <Header />
          
            <div>
                <h3 className='p-3 mt-3'>CATEGORIES</h3>
         
              
                <Row className=''>
                    <div >
                        <Navbar className="text-dark bg-light navbarSec p-5">
                            <Nav>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav1} className='imgWidth' />
                                </Nav.Link>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav2} className='imgWidth' />
                                </Nav.Link>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav3} className='imgWidth' />
                                </Nav.Link>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav4} className='imgWidth' />
                                </Nav.Link>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav5} className='imgWidth' />
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </Row>
            </div>
            <Row className='divCenter p-5 '>
                <Col sm={3} className=''>
                    <img src={homeimg1} className='border border-danger centerImgWidth' />
                    <p className='centerTextWidth fontWidth pt-3 '>
                        Xtra-power manufactures high-quality Power Tools superior-performing electric power tools
                        in different categories. The wide variety of Power tools like
                    </p>
                    <button className='btn btn-danger'>See More <ArrowForwardIosIcon /></button>
                </Col>
                <Col sm={3}>
                    <img src={homeimg01} className='border border-danger centerImgWidth' />
                    <p className='centerTextWidth fontWidth pt-3'>
                        Xtra-power exhibits the best bench of better performing Power Tools suitable for modern
                        requirements. The Xtra-power Gold category includes Power
                    </p>
                    <button className='btn btn-danger'>See More <ArrowForwardIosIcon /></button>
                </Col>
                <Col sm={3}>
                    <img src={homeimg02} className='border border-danger centerImgWidth' />
                    <p className='centerTextWidth fontWidth pt-3'>
                        Xtra-power manufactures high-quality Power Tools superior-performing electric
                        power tools in different categories. The wide variety of Power tools like
                    </p>
                    <button className='btn btn-danger'>See More <ArrowForwardIosIcon /></button>
                </Col>
                <Col sm={3}>
                    <img src={homeimg03} className='border border-danger centerImgWidth' />
                    <p className='centerTextWidth fontWidth pt-3'>
                        The Power Tools are easy to operate and move for creating a perfect finishing and
                        cutting performance. The raw materials used during the design process are
                    </p>
                    <button className='btn btn-danger'>See More <ArrowForwardIosIcon /></button>
                </Col>
            </Row>
            <div>
                <h3 className='p-3 mt-3'>Featured Product</h3>
                <p>Xtra Power professional</p>
                <Row className=' pt-5 mb-5'>
                    {feature.length > 0 ?feature.map((index) => (
                        <Col>
                        <img src={index.image} width="200px" className='border border-danger ' />
                        <p className='pt-4'>
                            <strong>{index.name}</strong>
                        </p>
                    </Col> 
                    )): <TailSpin color="#00BFFF" height={95} width={1250} />
                }
                    
                </Row>
            </div>

            <Row className='newDiv p-4 mb-5'>
                {
                quality.length > 0 ?quality.map((item) => (
                    <Col><img width='120px' src={item.image} className='border border-danger ' />
                    <p className='pt-4'>
                        <strong>{item.name}</strong>
                    </p>
                    </Col>
                )): <TailSpin color="#00BFFF" height={95} width={1250} />
                }
            </Row>
            {/* <Row> */}
            <div className='rediusDiv pt-2 pb-2 mb-5'>
                <h3>Mater Catologue 2021</h3>
                <h4 className="text-muted">Extra Power Product Catalogue Always on the cuting ages</h4>
            </div>
            {/* </Row> */}
            <Footer />
        </div >
    )
}
export default Homepage;