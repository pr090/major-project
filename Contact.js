import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="py-5">
            <h2 className="text-center my-5">
                Contact <span style={{ textDecoration: 'underline', color: '#FF6347' }}>Us</span>
            </h2>

            <Row>
                <Col md={5}>
                    <div className="contact-info p-4 mb-4" style={{ borderRadius: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
                        <h5>USA</h5>
                        <p>📍 651 N Broad St, Suite 206, 19709 Middletown, Delaware.</p>
                        <p>📞 +1 (308) 300-3078</p>
                    </div>
                    <div className="contact-info  p-4 " style={{ borderRadius: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
                        <h5>INDIA</h5>
                        <p>📍 D 197, Street no.8, Laxmi Nagar, 110092, Delhi</p>
                        <p>📞 +91 93019 58764</p>
                    </div>
                </Col>
                <Col md={7}>
                    <div className="contact-form  p-4 " style={{ borderRadius: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
                        <h5>Send us message</h5>
                        <Form>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Control type="email" placeholder="E-mail id" />
                            </Form.Group>
                            <Form.Group controlId="formSubject" className="mb-3">
                                <Form.Control as="select">
                                    <option>Subject</option>
                                    <option>General Inquiry</option>
                                    <option>Support</option>
                                    <option>Feedback</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Control as="textarea" rows={3} placeholder="Message" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Send
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
