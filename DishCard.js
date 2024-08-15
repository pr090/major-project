import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DishCard = ({ image, name, rating, reviews, price }) => {
    return (
        <Card className="text-center" style={{ borderRadius: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img
                variant="top"
                src={image}
                style={{ borderRadius: '20px 20px 0 0', height: '300px' }}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h3>{price}</h3>
                <Button variant="outline-success" >
                    Add to Cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default DishCard;
