import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';  
import './style.css';

const Carousel = ({ books }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,  
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {books.slice(0, 3).map((book) => ( 
                    <div key={book.id} className="carousel-item">
                        <Link to={`/review/${book.id}`}>  
                            <img src={book.image} alt={book.title} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
