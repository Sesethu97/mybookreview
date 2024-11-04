import React from 'react';
import './style.css';
import StarRating from '../../data/star_ratings';

const HomeReviewCard = ({ id, title, author, image, rating }) => {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={image} alt={title} /> 
            <p>Author: {author}</p>
            <div>
                <StarRating rating={rating} /> 
            </div>
        </div>
    );
};

export default HomeReviewCard; 
