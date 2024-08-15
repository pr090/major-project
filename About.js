import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-sm p-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">About Us</Card.Title>
                            <Card.Text>
                                Welcome to Pizza Store, your go-to destination for the most delicious and freshly made pizzas in town! We pride ourselves on using only the finest ingredients, sourced locally whenever possible, to bring you an unparalleled pizza experience.
                            </Card.Text>
                            <Card.Text>
                                Our journey began with a passion for authentic Italian flavors and a commitment to quality. Over the years, we have crafted a menu that not only includes classic pizzas but also innovative creations that cater to a variety of tastes. Whether you prefer a traditional Margherita or something more adventurous like our spicy BBQ chicken pizza, we've got something for everyone.
                            </Card.Text>
                            <Card.Text>
                                At Pizza Store, our customers are at the heart of everything we do. Our friendly staff is dedicated to providing exceptional service, whether you're dining in, taking out, or getting a delivery. We believe that great pizza brings people together, and we’re proud to be a part of your celebrations, family dinners, and casual get-togethers.
                            </Card.Text>
                            <Card.Text>
                                Thank you for choosing Pizza Store. We look forward to serving you and making your pizza experience truly special!
                            </Card.Text>
                            <Card.Text className="text-center mt-4">
                                <strong>Our Mission:</strong> To deliver the best pizza with a commitment to quality, innovation, and customer satisfaction.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
