import React, { useState, useEffect } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import ContactUsBanner from './ContactUsBanner.png';
import ContactUs2 from './ContactUs2.png';
import axios from 'axios';
import './ContactUs.css';
import { Rings } from  'react-loader-spinner';

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function ContactUs() {

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
      getAllQualities();
    }, 2000);
  }, [])
  return (
    <div className='container-fluid'>
      <Header />
      <Row>
        <img className="w-100" src={ContactUsBanner} />
      </Row>
      <Row className='mt-5'>
        <h4 className=''>Get In Touch With Us</h4>
        <div className='p-5'>
          <Row className='contactDiv textCenter p-4'>
            <Col md={4} className='pt-5'>
              <p >Question,Comments? You us. We listen.
                Email: seles@xtrapowertools.com
                Helpline Number: +911244000608
                Monday to Saturday - 10:00 am to 7:30 pm
                Need Us? Call Us.
                +911244000608</p>
            </Col>
            <Col md={5}>
              <Card>
                <Card.Body className='textForm'>
                  <Card.Title><h6 className='text-danger'>Our Job Process</h6></Card.Title>
                  <h6>You can connect with us</h6>
                  <Card.Text>
                    <div className=''>
                      <Form>
                        <Row className="mb-3">
                          <Col>
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
            </Col>
          </Row>
        </div>
      </Row>

      <Row>
        <img className='w-100' src={ContactUs2} />
      </Row>

      <Row className='newDiv p-4 mb-5'>
        {
          quality.length > 0 ?quality.map((item) => (
            <Col><img width='120px' src={item.image} className='border border-danger ' />
              <p className='pt-4'>
                <strong>{item.name}</strong>
              </p>
            </Col>
          )): <Rings color="#00BFFF" height={95} width={1250} />
        }
             </Row>
      {/* <div className="testing-area"> */}
      {/* <Container> */}
      {/* <Row className="testing-area mt-5">
          <Col className='p-3'>
            <div className='testing-body'>
              123
            </div>
          </Col>
          <Col className='p-3'>
            <div className='testing-body'>
              123
            </div>
          </Col>
          <Col className='p-3'>
            <div className='testing-body'>
              123
            </div>
          </Col>
          <Col className='p-3'>
            <div className='testing-body'>
              123
            </div>
          </Col>
        </Row> */}
      {/* </Container> */}
      {/* </div> */}

      <Footer />
    </div>
  )
}
