import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ height: "500px" }}
                    className="d-block w-100"
                    src="images/Carousel1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Nutrition</h1>
                    <h3>Clean nutrition for real life wellness</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: "black", height: "500px" }}>
                <img
                    style={{ height: "500px", opacity: "0.8 " }}
                    className="d-block w-100"
                    src="images/Carousel2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 style={{ color: "White" }}>Breakfast</h1>
                    <h3 style={{ color: "White" }}>Start Your day With healthy Breakfast</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "500px", opacity: "0.8" }}
                    className="d-block w-100"
                    src="images/Carousel3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 style={{ color: "Black" }}>Get the Goods</h1>
                    <h3 style={{ color: "Black" }} >
                        Get Your Food at No waiting time
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels
