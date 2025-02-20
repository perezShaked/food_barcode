import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../../public/white-tuna.png';
import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navBar">
      <div className="hamburgerButton" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img className="appLogo" src={logo} />
      <ul className={`linksList ${menuOpen ? 'openLinksList' : ''}`}>
        <li>
          <Link to={'/addNewCategory'}>קטגוריה חדשה</Link>
        </li>
        <li>
          <Link to={'/addNewProduct'}>פריט חדש</Link>
        </li>
        <li>
          <Link to={'/'}>סרוק מוצר</Link>
        </li>
        <li>
          <Link to={'/stockList'}>רשימת מלאי</Link>
        </li>
      </ul>
    </nav>
  );
};
