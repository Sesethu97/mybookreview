import React from 'react';
import { useParams } from 'react-router-dom';
import reviews from '../../data/reviews'; 
import ReviewCard from '../../components/review_card'; 

const GenreReviews = () => {
  const { genre } = useParams(); 
  const filteredReviews = reviews.filter(review => review.genre.toLowerCase() === genre.toLowerCase());

  return (
    <div className="genre-reviews">
      <h1>{genre.charAt(0).toUpperCase() + genre.slice(1)} Reviews</h1>
      {filteredReviews.length > 0 ? (
        <div className="reviews-container">
          {filteredReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      ) : (
        <p>No reviews found for this genre.</p>
      )}
    </div>
  );
}

export default GenreReviews;
