import React from 'react';
import { useParams } from 'react-router-dom';
import reviews from '../../data/reviews'; 
import StarRating from '../../data/star_ratings';
import './style.css'; 
import Footer from '../../components/footer';

const ReviewDetails = () => {
    const { id } = useParams();
    console.log("id", id);

    const review = reviews.find(review => review.id === id);
    console.log("review", review);


    return (
        <div className='review-details'>
            <h1>Review Details</h1>
            {review && ( 
                <div className='review-content'>
                    <div className='image-side-left'>
                        <img src={review.image} alt={review.title} /> 
                        <p> <StarRating rating={review.rating} /></p>
                    </div>
                    <div className='info-side-right'>
                        <p> {review.title}</p>
                        <p> {review.author}</p>
                        <p> {review.content}</p>
                    </div>
                </div>
            )}
              <div>
            <Footer/>
        </div>
        </div>
      
    );
};

export default ReviewDetails;
