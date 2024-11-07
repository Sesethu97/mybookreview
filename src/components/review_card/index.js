import React, { useState } from 'react';
import './style.css';
import StarRating from '../../data/star_ratings';
import { Link } from 'react-router-dom';

const ReviewCard = ({ id, title, author, image, rating, content }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={image} alt={title} />
            <p>{title}</p>
            <div>
                <StarRating rating={rating} />
            </div>

            {hovered && (
                <div className="popup">
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                    <p>by {author}</p>
                    <p>{content && content.slice(0, 100)}...</p> 
                    <Link to={`/review/${id}`} className="learn">
                        More
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ReviewCard;
