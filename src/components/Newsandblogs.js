import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Row, Col } from 'react-bootstrap'
import './Newsandblogs.css';
import aboutImg from './aboutImg.png';
import NewsBloge from './NewsBloge.png';
import NewBlock1 from './NewBlock1.png';
import NewBlock2 from './NewBlock2.png';
import NewBlock3 from './NewBlock3.png';
import NewBlock4 from './NewBlock4.png';
import NewBlock5 from './NewBlock5.png';
import NewBlock6 from './NewBlock6.png'
const Newsandblogs = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <div className=''>
                <img className='' src={aboutImg}/>
                <h3>News & Blogs</h3>
                Home / News & Blogs
            </div>
            <div >
                <Row className='p-5'>
                    <Col sm={7} >
                        <img src={NewsBloge} className='imgSize border border-danger' />
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={4}>
                        <p className='TextJusti'>
                            The 19th Edition of Hand Tools and Fastener Expo held at Bombay Exhibition Centre from 16th
                            December, 2021 – 18th December, 2021 was about interacting and networking businesses among
                            the exhibitors, visitors and the host.

                            Xtra Power has projected innovatively modeled products with exceptional quality since 1995
                            and exhibiting for four years and still running the event. Delivering the premium quality
                            of power tools, abrasives, agricultural tools and accessories with best after sales
                            services by
                        </p>
                        <button className='btn btn-danger'>See More <ArrowForwardIosIcon /></button>
                    </Col>
                </Row>
                <div className='outerDiv pt-5 pb-5'>
                    <Row>
                        <div className='bgColor'></div>
                    </Row>
                    <Row className='p-3'>
                        <Col sm={10}>
                            <h4>The 19th Edition of Hand Tools and Fastener Expo – Mumbai</h4>
                        </Col>
                        <Col sm={2}>
                            <p>December 23,2021</p>
                        </Col>
                    </Row>
                    <Row className=''>
                        <p className='TextJusti '>
                            Hello everyone hope all are safe and healthy Xtra Power Tool is one of the leading
                            supplier nd other technically advanced tools since 1995. Our head office is in gurugram
                            where we provide you with more than 1500 technically refined power tools accessories and
                            agricultural tools joining hand with more than 1000 dealers and delivering the best after
                            sales services provided by our professionals with all those years of experience and with
                            the team of hard working professionals. We ensure do nothing but excellence to experience
                            the wide range of our high-end products.
                        </p>
                    </Row>
                    <button className='btn btn-danger'>See More <ArrowForwardIosIcon /></button>
                </div>
                <div className='p-4 mt-5 mb-5'>
                <Row  className='p-4 '>
                        <Col><img src={NewBlock1} className='border border-danger ' />
                        </Col>
                        <Col><img src={NewBlock2} className='border border-danger ' />
                        </Col>
                        <Col><img src={NewBlock3} className='border border-danger ' />
                        </Col>
                    </Row>
                    <Row className='p-4'>
                        <Col><img src={NewBlock4} className='border border-danger ' />
                        </Col>
                        <Col><img src={NewBlock5} className='border border-danger ' />
                        </Col>
                        <Col><img src={NewBlock6} className='border border-danger ' />
                        </Col>
                    </Row>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Newsandblogs;