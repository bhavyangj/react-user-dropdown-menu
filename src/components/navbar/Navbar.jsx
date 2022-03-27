import React from 'react'
import UserMenu from '../usermenu/UserMenu';
import './navbar.css';
const Navbar = ({ user }) => {
    return (
        <section className="navbar-container">
            <nav className="navbar wrapper">
                <div className="logo">Logo</div>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <a href="/home">Home</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="/about">About</a>
                    </li>
                    {user ? (
                        <UserMenu user={user}/>
                    ): (
                            <li className = 'nav-list-item'>
                                <a href = "/login" className = "login-btn">Login</a>
                            </li>
                    )}
        </ul>
        </nav >
    </section >
  )
}

export default Navbar