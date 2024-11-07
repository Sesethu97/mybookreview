import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import StarRating from '../../data/star_ratings';

const HomeReviewCard = ({ id, title, author, image, rating, content }) => {
    const [hovered, setHovered] = useState(false);

    return (
        
        <div 
            className='card' 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            <img src={image} alt={title} />
            <p>{title}</p>
           
            
            {hovered && (
                <div className='popup'>
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                    <p>by {author}</p>
                    <StarRating rating={rating} />
                    <p>{content ? content.slice(0, 100) : "No description available"}...</p>
                    <Link to={`/review/${id}}`} className='learn'>More</Link>
                </div>
            )}

        </div>
    );
};

export default HomeReviewCard; 
