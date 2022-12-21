import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import "./navbar.css"

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <div>
            <nav className="navbar">
                <p className="nav-p">KPR</p>
                <nav className={showMediaIcons ? "navbar-mobile-links" : "navbar-list"} onClick={() => setShowMediaIcons(false)}>
                    <ul >
                        <li>
                           <Link to="/counter">Counter</Link>
                        </li>
                        <li>
                        <Link to="/post">Post</Link>
                        </li>
                    </ul>
                </nav>
                <div className="navbar-menu-icons" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    {
                        showMediaIcons ? <i class="ri-close-line"></i> : <i class="ri-menu-line"></i>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;