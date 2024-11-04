import React from 'react';
import './style.css';
import ReviewCard from '../../components/review_card'; 
import reviews from '../../data/reviews';

const TopRated = ({ limit }) => {
    const topRatedReviews = reviews.filter(review => review.rating >= 4).slice(0, limit);

    return (
        <div className='top_rated'>
            <h1>Top Rated </h1>
            <div className='top_rated_cards_container'>
                {topRatedReviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

export default TopRated;
