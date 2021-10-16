import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    const productList = useSelector(state => state.products)
    let countProducts = 0
    if (productList.length) {
        productList.forEach(item => countProducts = countProducts + item.count)
    }
    return (
      <div className="nav-root">
        <nav className="nav">
          <Link to="/users">Users</Link>
          <Link to="/login">Login</Link>
          <Link to="/pokemon">Pokemon</Link>
          <Link to="/products">Products</Link>
        </nav>
        <div className="cart">
          <h4 className="badge">{countProducts}</h4>
        </div>
      </div>
    );
}
