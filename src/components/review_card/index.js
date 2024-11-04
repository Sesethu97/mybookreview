import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import StarRating  from '../../data/star_ratings';

const ReviewCard = ({ id, title, author, image, rating }) => {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={image} alt={title} /> 
            <p>Author: {author}</p>
            <div>
            <StarRating rating={rating} /> 
        </div>
        <div className='button'>
        <Link to={`/review/${id}`} className='learn'>Learn More</Link>

        </div>
        </div>
    );
};

export default ReviewCard;
