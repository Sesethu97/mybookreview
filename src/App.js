import React from 'react';
import './App.css';
import TopNav from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import TopReviews from './pages/top_reviews';
import Reviews from './pages/reviews';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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


        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
