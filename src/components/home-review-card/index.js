import React from 'react';
import './style.css';

const HomeReviewCard = ({ id, title, author, image, rating }) => {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={image} alt={title} /> 
           
        </div>
    );
};

export default HomeReviewCard; 
