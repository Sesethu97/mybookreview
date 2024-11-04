import React from 'react';
import './style.css';
import MenuIconSVG from '../../images/svg/menu-grid-r-svgrepo-com.svg';
import { CollectionsBookmark, Search } from '@mui/icons-material';

const TopNav = () => {
    return (
        <section>
            <nav>
                <div className='logo'>
                    <a href='/'>
                        <span className="book-logo"> {/* Changed to className */}
                            <CollectionsBookmark />
                        </span>
                    </a>
                </div>
                <ul className='nav-items'>
                    <li className='left-side'>
                        <a href='/'>Home</a>
                        <a href='/'>Book Reviews</a>
                        <a href='/'>Top Reviews</a>
                    </li>
                    <li className='right-side'>
                        <a href='/'>
                            <Search />
                        </a>
                        <a href='/'>
                            <img src={MenuIconSVG} alt='iconSVG' className='icon-svg' />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default TopNav;
