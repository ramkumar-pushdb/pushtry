import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <>
      <div className='header'>
        <h1 className='logo'>RRS Cloths</h1>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className='nav'>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <Link className='btn' to='/'>Home</Link>
          <Link className='btn' to='/Category'>Category</Link>
        </div>
      </div>
    </>
  )
}

export default Header;