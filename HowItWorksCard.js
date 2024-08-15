import React from 'react';
import { Card, Button } from 'react-bootstrap';

const HowItWorksCard = ({ image, title, description }) => {
    return (
        <Card className="text-center" style={{ borderRadius: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={image} style={{ borderRadius: '20px', width: '380px', height: "250px", margin: '20px auto' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="link" style={{ textDecoration: 'none', color: '#FF6347' }}>
                    Read More ➔
                </Button>
            </Card.Body>
        </Card>
    );
};

export default HowItWorksCard;
