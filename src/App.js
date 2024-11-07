import React from 'react';
import './App.css';
import TopNav from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import TopReviews from './pages/top_reviews';
import Reviews from './pages/reviews';
import ReviewDetails from './pages/review_details';
import GenreReviews from './pages/genres';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App background-pattern">
      
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/top-reviews" element={<TopReviews />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
          <Route path="/reviews/:genre" element={<GenreReviews />} /> 

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
