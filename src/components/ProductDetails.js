import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import RectangleProduct1 from './RectangleProduct1.png';
import RectangleProduct2 from './RectangleProduct2.png';
import RectangleProduct3 from './RectangleProduct3.png';
import RectangleProduct4 from './RectangleProduct4.png';
import Product1 from './Product1.png';
import product2 from './product2.png';
import product3 from './product3.png';
import product4 from './product4.png';
import product5 from './product5.png';
import Rectangle from './Rectangle.png'
import { Row, Col, Navbar, Card, Nav, Container } from 'react-bootstrap'
import { unstable_composeClasses } from '@mui/material';

export default function App() {
    let navigate = useNavigate();
    const location = useLocation();

    const [specifications, setSpecifications] = useState([]);
    const [img1, setImg1] = useState([]);
    const [img2, setImg2] = useState([]);
    const [img3, setImg3] = useState([]);
    const [img4, setImg4] = useState([]);

    async function getSpecifications() {
        try {
            const specs = await axios.get(`http://localhost:8000/api/getSpecificationPoints/${location.state.id}`)
            console.log(specs.data);
            setSpecifications(specs.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function getProductImages(){
        try {
            const images = await axios.get(`http://localhost:8000/api/productImages/${location.state.id}`)
            console.log(images.data);
            setImg1(images.data[0]);
            setImg2(images.data[1]);
            setImg3(images.data[2]);
            setImg4(images.data[3]);

        }
        catch(error) {
            console.log(error);

        }
    }

    useEffect(() => {
        setTimeout(() => {
            getSpecifications();
            getProductImages();
        }, 2000);
    }, [])

    return (<div>
        <Header />
        <Row className='m-4 p-2'>
                <Col md={4} className='colNo'>
                    <div className='p-2'>
                        <Row className=''><h4>XPT 400 ANGLE GRINDER</h4>
                            <hr></hr>
                        </Row>
                        <Row className='p-4'><img src={img1} className='BannerImg border border-danger colImg mt-1' /></Row>
                    </div>
                </Col>
                <Col md={2} className='colNo'>
                    <div className='pt-5'>
                        <Row className='p-3'><img src={img1} className='border border-danger imgWidth' /></Row>
                        <Row className='p-3'><img src={img2} className='border border-danger imgWidth' /></Row>
                        <Row className='p-3'><img src={img3} className='border border-danger imgWidth' /></Row>
                        <Row className='p-3'><img src={img4} className='border border-danger imgWidth' /></Row>
                    </div>
                </Col>
                <Col md={6} className='colWidthc '>
                    <div className='p-4'>
                    <h4 class="card-title">Specifications</h4>

                    <div class="table-responsive">

                        <table class="table table-striped">

                            <tbody>
                                {
                                    specifications.map((index) => (
                                        <tr>
                                            <td>
                                                {index.name}</td>
                                            <td>{index.value}</td>

                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='rowSec p-5 divJust'>
                <Col md={5} className='mt-4'>
                    <div className='divNum'></div>
                </Col>
                <Col md={4}>
                    <h4>About this item</h4>
                    <ul className='p-2'>
                        <li>Embraces 180mm disc</li>
                        <li>Solid 2050 watts motor</li>
                        <li>Adjustable lightweight build</li>
                        <li>Backside switch with lock lever</li>
                        <li>Side handle with three positions</li>
                        <li>An efficient slim body enables consistent use</li>
                        <li>Sturdy metal gears for higher tool reliability and enhanced tool life</li>
                    </ul>
                </Col>
                <Col md={3}>
                    <h4>Package Contents</h4>
                    <ul className='mt-2'>
                        <li>1 unit Angle Grinder</li>
                        <li>1 unit Wheel Guard</li>
                        <li>1 unit Side Handle</li>
                        <li>1 Pair Carbon Brush</li>
                        <li>1 unit Spanner</li>
                        <li>1 unit User Manual</li>
                    </ul>
                </Col>
            </Row>
            <Row className=''>
                <div>
                    <Navbar className="text-dark bg-light navbarSec">
                        <Nav>
                            <Nav.Link href="#" className=''>Description</Nav.Link>
                            <Nav.Link href="#" className=''>Additional information </Nav.Link>
                            <Nav.Link href="#" className=''> Reviews (141)</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <hr></hr>
            </Row>
            <Row className='textCenter'>
                <div className='p-4'>
                    <h4 className='p-2'>
                        <strong className='text-danger'>XTRA-POWER XPT 400</strong> Angle Grinder 180mm</h4>
                    <h6 className='p-1'>Looking for a handy, easy-to-use angle grinder?</h6>
                    <p className='pb-2'>Get XTRA-POWER XPT 400 with a 180mm diameter wheel.
                        The angle grinder offers three positioned sides for the handle for you to
                        choose from and comes with a safety lock for the disc. It gives you a
                        speed of 8300 RPM for smooth and fast results. A powerful motor with the power
                        input of 2050 Watts makes cutting, grinding, and polishing runs effortlessly.
                        The angle grinder is suitable for various materials and tasks as it can be
                        used with cut-off Wheel,  grinding discs, grinding stones, sanding discs,
                        wire brush wheels, and polishing pads. It is designed with
                        the perfect body to have a stable and strong grip.
                    </p>
                    <button className='btn btn-danger btnBox'>Book Now</button>
                </div>
            </Row>
            <Row className='mb-4'>
                <h5>Related Products</h5>
            </Row>
            <Row className='newDiv pt-5 mb-5'>
                <Col><img src={Product1} className='border border-danger ' />
                    <p className='pt-4'><strong>XPT 428 DRILL MACHINE</strong></p>
                </Col>
                <Col><img src={product2} className='border border-danger ' />
                    <p className='pt-4'><strong>XPT 413 MARBLE CUTTER</strong></p>
                </Col>
                <Col><img src={product3} className='border border-danger ' />
                    <p className='pt-4'><strong>XPT 416 MARBLE CUTTER</strong></p>
                </Col>
                <Col><img src={product4} className='border border-danger ' />
                    <p className='pt-4'><strong>XPT 410 STRAIGHT GRINDER</strong></p>
                </Col>
                <Col><img src={product5} className='border border-danger ' />
                    <p className='pt-4'><strong>XPT 426 DIE GRINDER</strong></p>
                </Col>
                
            </Row>

        


        <Footer />

    </div>)
}