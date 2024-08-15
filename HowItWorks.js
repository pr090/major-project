import React from 'react';
import HowItWorksCard from './HowItWorksCard';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from "../../assets/intro-1682537614.jpg";
import image2 from "../../assets/track_order.jpg";
import image3 from "../../assets/collect_order.webp";


const HowItWorks = () => {
    const steps = [
        {
            image: image1,
            title: 'Chose your Meals',
            description: 'We will deliver your food within 30 minutes in your town, if we would.',
        },
        {
            image: image2,
            title: 'Track Your Order',
            description: 'We will deliver your food within 30 minutes in your town, if we would.',
        },
        {
            image: image3,
            title: 'Collect Your Order',
            description: 'We will deliver your food within 30 minutes in your town, if we would.',
        },
    ];

    return (
        <Container>
            <h2 className="text-center my-5">
                How does it <span style={{ textDecoration: 'underline', color: '#FF6347' }}>Works</span>
            </h2>
            <Row>
                {steps.map((step, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <HowItWorksCard {...step} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HowItWorks;
