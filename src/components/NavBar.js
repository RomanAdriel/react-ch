import React, {useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'

import CartWidget from './CartWidget';
import { contextFromCart } from '../context/CartContext';

const NavBar = () => {

	const {quantity} = useContext(contextFromCart)

	return (<>
		<header>
			<div className="container__nav">
			<h1>
			<Link to="/">Román's WebStore</Link>
			</h1>
				<p className="moto">You want it, you find it</p>
			</div>
			<nav>
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" data-text="men's clothing" to="/category/men's clothing">Men's Clothing</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" data-text="women's clothing" to="/category/women's clothing">Women's Clothing</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" data-text="electronics" to="/category/electronics">Electronics</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" data-text="jewelery" to='/category/jewelery'>Jewelery</NavLink>
					</li>
					<li className="nav-item" style={{ visibility: quantity==0 && 'hidden' }}>
					<NavLink className="nav-link" data-text="X" to='cart'><CartWidget /></NavLink>
					</li>
				</ul>
			</nav>
		</header>
		</>
	)
}

export default NavBar;