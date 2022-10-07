import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';
import AppContext from '../contexts/AppContext';

export default function Header() {
  const { state: { cart } } = useContext(AppContext);

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <BsCart4 />
        </Link>
        {cart.length >= 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}
