import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import menuItems from './menuItems';

function Menu() {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Our Menu</h2>
            <Row>
                {menuItems.map((item) => (
                    <Col md={6} lg={4} key={item.id} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={item.image} alt={item.name} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text><strong>{item.price}</strong></Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button variant="success col-md-12">Order Now</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Menu;
