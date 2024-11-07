import React, { useState } from 'react';
import './style.css';
import MenuIconSVG from '../../images/svg/menu-grid-r-svgrepo-com.svg';
import { CollectionsBookmark, Search } from '@mui/icons-material';

const genres = ['Biography', 'Thriller', 'Fantasy', 'Non-Fiction', 'Fiction', 'Crime', 'Comedy'];

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <section>
      <nav>
        <div className='logo'>
          <a href='/'>
            <span className="book-logo">
              <CollectionsBookmark />
            </span>
          </a>
        </div>
        <ul className='nav-items'>
          <li className='left-side'>
            <a href='/'>Home</a>
            <a href='/reviews'>Book Reviews</a>
            <a href='/top-reviews'>Top Reviews</a>
          </li>
          <li className='right-side'>
            <a href='/'><Search /></a>
            <a href='/' onClick={toggleMenu}>
              <img src={MenuIconSVG} alt='iconSVG' className='icon-svg' />
            </a>
          </li>
        </ul>
      </nav>
      {menuOpen && (
        <div className='popup-menu'>
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>
                <a href={`/reviews/${genre.toLowerCase()}`}>{genre}</a> {/* Dynamic genre link */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default TopNav;
