import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import CartWidget from './CartWidget';

const NavBar = ({cartItems}) => {
	console.warn(cartItems)

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
					<li className="nav-item">
					<NavLink className="nav-link" data-text="X" to='cart'><CartWidget cartItems={cartItems}/></NavLink>
					</li>
				</ul>
			</nav>
		</header>
		</>
	)
}

export default NavBar;