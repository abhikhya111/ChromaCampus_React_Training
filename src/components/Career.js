import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Banner from './careerBanner.png'
import './Career.css';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import MarketingImg from './Marketing.png';
export default function Career() {
    return (
        <div className='container-fluid'>
            <Header />
            <div>
                <img className='career-banner' src={Banner} />
            </div>
            <div className=''>
                <h3 className='join-heading '>Join Us</h3>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue
                    sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris,
                    nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                    Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat
                    duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim
                </p>

                <div className='opening'>
                    Current Opening
                </div>
                <div className='cards p-4 mb-5'>
                    <Card style={{ width: '23rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <img className="career-img" width="105px" src={MarketingImg} />
                        <Card.Body>
                            <Card.Title><p className='d-flex justify-content-center'>Marketing</p> </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor amet, consectetur adipiscing
                                elit. Cursus nibh mauris, nec turpis orci lectus
                                Suspendisse sed magna eget nibh in turpis.
                                duis diam lacus arcu. Faucibus venenatis felis
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '23rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <img className="career-img" width="105px" src={MarketingImg} />
                        <Card.Body>
                            <Card.Title><p className='d-flex justify-content-center'>Marketing</p></Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor amet, consectetur adipiscing
                                elit. Cursus nibh mauris, nec turpis orci lectus
                                Suspendisse sed magna eget nibh in turpis.
                                duis diam lacus arcu. Faucibus venenatis felis
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '23rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <img width="105px" className="career-img" src={MarketingImg} />
                        <Card.Body>
                            <Card.Title><p className='d-flex justify-content-center'>Marketing</p></Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor amet, consectetur adipiscing
                                elit. Cursus nibh mauris, nec turpis orci lectus
                                Suspendisse sed magna eget nibh in turpis.
                                duis diam lacus arcu. Faucibus venenatis felis
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <Row className='job-process p-5'>
                <Card style={{ width: '34rem', marginLeft: "auto", marginRight: "auto", marginTop: "100px", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <Card.Body >
                        <Card.Title><h6 className='text-danger'>Our Job Process</h6></Card.Title>
                        <h6>You can connect with us</h6>
                        <Card.Text>
                            <div className='m-3'>
                                <Form>
                                    <Row className="mb-3">
                                        <Col >
                                            <Form.Group >
                                                <Form.Control type="text" placeholder="Your Name" />
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group  >
                                                <Form.Control type="email" placeholder="Email Address" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group  >
                                            <Form.Select>
                                                <option>Current Opening</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-4">
                                        <Form.Group >
                                            <Form.Select>
                                                <option>Resume</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>

                                    <Button className='buttonBox' variant="danger" type="submit">
                                        Upload
                                    </Button>
                                </Form>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Footer />
        </div>
    )
}
