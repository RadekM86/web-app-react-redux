import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    const counter = useSelector(state => state.counter)
    return (
        <div>
        <nav className="nav">
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to="/pokemon">Pokemon</Link>
        </nav>
        <h1>{counter}</h1>
        </div>
    )
}
