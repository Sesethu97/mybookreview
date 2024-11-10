import React, { useState } from 'react';
import './style.css';
import Footer from '../../components/footer';
import reviews from '../../data/reviews';
import HomeReviewCard from '../../components/home-review-card';
import book from '../../images/coverbook.png';
import Slider from 'react-slick'; 

const Home = () => {
    const randomBooks = reviews.sort(() => 0.5 - Math.random()).slice(0, 6);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className='home'>
            <div className='top-home'>
                <img 
                    src={book} 
                    alt="Featured Book" 
                    className="top-image"
                />
                <div className="card-overlay">
                    <h3>Bookies Corner</h3>
                    <p>Find your next read by going through our book reviews</p>
                </div>
                <h1></h1>
            </div>

            <div className='about'>
                <h2>Welcome to <span>Bookies Corner</span></h2>
                <p>At Bookies Corner, we are passionate about books and the joy they bring to readers of all ages. Whether you're an avid reader or just getting started, our carefully curated collection offers something for everyone. From gripping thrillers to heartwarming stories, our goal is to provide a space where you can explore, discover, and immerse yourself in the world of literature.</p>
                <p>Explore our various genres, read insightful reviews, and find your next great read. Join our community of book lovers, share your thoughts, and let us help you discover your next favorite book. Bookies Corner is not just a bookstore, it's a place for book enthusiasts to connect, learn, and grow.</p>
            </div>

            <div className='book-reviews'>
                <h2>Featured Reviews</h2>
                <Slider {...settings}>
                    {randomBooks.map((review) => (
                        <div key={review.id} className="carousel-item">
                            <HomeReviewCard 
                                id={review.id}
                                image={review.image} 
                                author={review.author} 
                                content={review.content} 
                                title={review.title} 
                            />
                        </div>
                    ))}
                </Slider>
            </div>
                  
        </div>
    );
};

export default Home;
