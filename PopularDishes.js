import React, { useState } from 'react';
import DishCard from './DishCard.js';
import { Container, Row, Col, Button } from 'react-bootstrap';
import menuItems from '../menuItems';

const PopularDishes = () => {
    const [showAll, setShowAll] = useState(false);
    const initialItemsCount = 3;
    const initialDishes = menuItems.slice(0, initialItemsCount);
    const additionalDishes = menuItems.slice(initialItemsCount);

    const handleShowAllClick = () => {
        setShowAll(true);
    };

    return (
        <Container>
            <h2 className="text-center my-5">
                Our Popular <span style={{ textDecoration: 'underline', color: '#FF6347' }}>Dishes</span>
            </h2>
            <Row>
                {initialDishes.map((dish) => (
                    <Col key={dish.id} sm={12} md={6} lg={4} className="mb-4">
                        <DishCard {...dish} />
                    </Col>
                ))}
                {showAll && additionalDishes.map((dish) => (
                    <Col key={dish.id} sm={12} md={6} lg={4} className="mb-4">
                        <DishCard {...dish} />
                    </Col>
                ))}
            </Row>
            <div className="text-center mt-4">
                {!showAll ? (
                    <Button variant="warning" style={{ borderRadius: '20px' }} onClick={handleShowAllClick}>
                        See All Dishes
                    </Button>
                ) : null}
            </div>
        </Container>
    );
};

export default PopularDishes;
