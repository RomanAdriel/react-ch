import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { contextFromCart } from '../context/CartContext';
import "./Cart.scss";

const Cart = () => {

const { cart, total, removeItem, clearCart } = useContext(contextFromCart);

return (
    <div className="cart">
      <div className="cartList">
        <span><h2>Your shopping cart</h2> {cart.length>0 && <span onClick={clearCart}>Empty cart</span>}</span>
        {cart.map( (item, index) => {
          return (<div key={index}>
            <div className="itemContainer">
              <div className="name">
                <Link to={`/product/${item.id}`}>{item.title}</Link>
              </div>
              <div className="modify">
                <b>{item.qt}</b>
								<i>x</i>
              </div>
              <div className="price">
                <span className="a">${ Intl.NumberFormat('es-AR').format(item.price)}</span>
              </div>
              <div className="remove">
                <span className="material-icons-outlined" onClick={ () => removeItem(index) }>delete</span>
              </div>
            </div>
						<div className="subtotal">Subtotal: <span className="alignprice">${Intl.NumberFormat('es-AR').format(item.price * item.qt)}</span></div>
					</div>);
        })}
				{cart.length==0 && <span>Your cart is empty, <Link to='/'>Start shopping</Link></span>}
      </div>

			{cart.length>0 && <div className="checkout">
				<h2>Checkout</h2>
				<div className="bigtotal">Total: <span>${Intl.NumberFormat('es-AR').format(total)}</span></div>
			</div>}
    </div>
  );
};

export default Cart;