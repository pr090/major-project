import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/pizza-cartoon-ai-generate-png.png';
import "../style.css";
import Button from 'react-bootstrap/Button';
import PopularDishes from './PopularDishes.js';
import HowItWorks from './HowItWorks.js';
import Contact from './Contact.js';

function Home() {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate('/items');
    };

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 order-md-2 order-1">
                    <img src={image} className="img-fluid" alt="Pizza" />
                </div>
                <div className="col-lg-5 col-md-6 order-md-1 order-2 mb-4 mb-md-0">
                    <h2 className='heading'>The tastiest pizza in town</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum deleniti debitis ex, minus itaque molestias voluptates ipsa perspiciatis optio excepturi!</p>
                    <Button variant="warning" onClick={handleOrderNowClick}>Order Now</Button>
                </div>
            </div>
            <PopularDishes />
            <HowItWorks />
            <Contact />
        </div>
    );
}

export default Home;
