import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import ContactUsBanner from './ContactUsBanner.png';
import ContactUs2 from './ContactUs2.png';
import contactImg1 from './contactImg1.png';
import contactImg2 from './contactImg2.png';
import contactImg3 from './contactImg3.png';
import contactImg4 from './contactImg4.png';
import './ContactUs.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function ContactUs() {
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
            </Col>
          </Row>
        </div>
      </Row>

      <Row>
        <img className='w-100' src={ContactUs2} />
      </Row>

      <Row className='newDiv p-4 mb-5'>
        <Col><img src={contactImg1} className='border border-danger ' />
          <p className='pt-4'><strong>XPT 413 MARBLE CUTTER</strong></p>
        </Col>
        <Col><img src={contactImg2} className='border border-danger ' />
          <p className='pt-4'><strong>XPT 416 MARBLE CUTTER</strong></p>
        </Col>
        <Col><img src={contactImg3} className='border border-danger ' />
          <p className='pt-4'><strong>XPT 410 STRAIGHT GRINDER</strong></p>
        </Col>
        <Col><img src={contactImg4} className='border border-danger ' />
          <p className='pt-4'><strong>XPT 426 DIE GRINDER</strong></p>
        </Col>
        {/* <Card className='border border-danger '>
                    <Card.Img variant="top" src={Product1} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        <span><strong>XPT 428 DRILL MACHINE</strong></span>
                        </Card.Text>
                    </Card.Body>
                </Card> */}
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
