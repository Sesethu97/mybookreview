// Home.js

import React from 'react';
import './style.css';

import Footer from '../../components/footer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import reviews from '../../data/reviews';

const themes = ['Biography', 'Thriller', 'Fantasy', 'Non-Fiction', 'Fictional', 'Crime']; 
const Home = () => {
    return (
        <div className='home'>
            <div className='top-home'>
                <h1>Welcome to the Home Page</h1>
                <div className='top-book-reviews'></div>
            </div>
            
            <div className='book-reviews'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {themes.map((theme, index) => {
                            const filteredReviews = reviews.filter(review => review.genre === theme);

                            if (filteredReviews.length === 0) return null;

                            return (
                                <Grid item xs={12} key={index}>
                                    <Paper style={{ padding: '16px', textAlign: 'center' }}>
                                        <h2>{theme}</h2>
                                        {filteredReviews.map((review, reviewIndex) => (
                                            <div key={reviewIndex}>
                                                <h3>{review.title}</h3>
                                                <p>{review.description}</p>
                                            </div>
                                        ))}
                                    </Paper>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
