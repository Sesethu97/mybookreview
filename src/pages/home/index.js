import React from 'react';
import './style.css';
import Footer from '../../components/footer';
import reviews from '../../data/reviews';
import HomeReviewCard from '../../components/home-review-card';
import Carousel from '../../components/carousel';

const themes = ['Biography', 'Thriller', 'Fantasy', 'Non-Fiction', 'Fictional', 'Crime', 'Comedy']; 

const topRatedReviews = [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 6);

const Home = () => {
    return (
        <div className='home'>
            <div className='top-home'>
                <h1>Welcome to the Home Page</h1>
            </div>
            
            {/* Carousel section */}
            <div className="carousel-section">
                <h2>Top Rated Books</h2>
                <Carousel books={topRatedReviews} />
            </div>
            
            <div className='book-reviews'>
                {themes.map((theme, index) => {
                    const filteredReviews = reviews.filter(review => review.genre === theme);

                    if (filteredReviews.length === 0) return null;

                    return (
                        <div key={index} className='theme-section'>
                            <h2>{theme}</h2>
                            <div className='reviews-container'>
                                {filteredReviews.slice(0, 5).map((review) => (
                                    <HomeReviewCard 
                                        key={review.id} 
                                        id={review.id}
                                        image={review.image} 
                                        author={review.author} 
                                        content={review.content} 
                                        title={review.title} 
                                    />
                                ))}
                            </div>

                            {filteredReviews.length > 5 && (
                                <button className='see-more-button'>See More</button>
                            )}
                        </div>
                    );
                })}
            </div>
                  
            <Footer />
        </div>
    );
};

export default Home;
