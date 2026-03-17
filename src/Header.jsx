import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">

      {/* Top announcement bar */}
      <div className="header-topbar">
        🎉 Free shipping on orders above ₹999 &nbsp;|&nbsp; Use code: <strong>RRS10</strong>
      </div>

      <div className="header-main">

        {/* Logo */}
        <Link to="/" className="header-logo">
          RRS <span>Cloths</span>
        </Link>

        {/* Desktop nav */}
        <nav className="header-nav">
          <Link to="/"          className={`header-link ${location.pathname === '/'          ? 'active' : ''}`}>Home</Link>
          <Link to="/men"  className={`header-link ${location.pathname === '/men'  ? 'active' : ''}`}>Men</Link>
          <Link to="/women"     className={`header-link ${location.pathname === '/women'     ? 'active' : ''}`}>Women</Link>
          <Link to="/kids"       className={`header-link ${location.pathname === '/kids'       ? 'active' : ''}`}>Kids</Link>
          <Link to="/genz"      className={`header-link ${location.pathname === '/genz'      ? 'active' : ''}`}>Genz</Link>
        </nav>

        {/* Search bar (desktop) */}
        <div className="header-search">
          <input type="search" placeholder="Search clothes, brands…" />
          <button aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        {/* Icon group */}
        <div className="header-icons">
          {/* Mobile search toggle */}
          <button
            className="icon-btn mobile-search-btn"
            onClick={() => setSearchOpen(p => !p)}
            aria-label="Toggle search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Wishlist */}
          <button className="icon-btn" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06
                a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
                1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>

          {/* Cart */}
          <button className="icon-btn cart-btn" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className="cart-badge">3</span>
          </button>

          {/* Hamburger */}
          <button
            className="icon-btn hamburger"
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      {searchOpen && (
        <div className="mobile-search-bar">
          <input type="search" placeholder="Search clothes, brands…" autoFocus />
          <button aria-label="Search">Search</button>
        </div>
      )}

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-drawer" onClick={e => e.stopPropagation()}>
            <div className="drawer-logo">RRS <span>Cloths</span></div>
            {['/', '/category', '/women', '/men', '/sale'].map((path, i) => (
              <Link
                key={path}
                to={path}
                className={`drawer-link ${location.pathname === path ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {['Home', 'Category', 'Women', 'Men', 'Sale'][i]}
              </Link>
            ))}
          </nav>
        </div>
      )}

    </header>
  );
}

export default Header;