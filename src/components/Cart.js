import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { contextFromCart } from '../context/CartContext';

const Cart = () => {

const { cart, total, cantidad, removeItem, clearCart } = useContext(contextFromCart);

return (
    <div>
      <div>
        <span><h2>Your shopping cart</h2> {cart.length>0 && <span onClick={clearCart}>Empty cart</span>}</span>
        {cart.map( (item, index) => {
          return (<div key={index}>
            <div>
              <div>
                <Link to={`/product/${item.id}`}>{item.title}</Link>
              </div>
              <div>
                <b>{item.qt}</b>
								<i>x</i>
              </div>
              <div>
                <span>${ Intl.NumberFormat('es-AR').format(item.price)}</span>
              </div>
              <div>
                <span className="material-icons-outlined" onClick={ () => removeItem(index) }>delete</span>
              </div>
            </div>
						<div>Subtotal: <span>${Intl.NumberFormat('es-AR').format(item.price * item.qt)}</span></div>
					</div>);
        })}
				{cart.length==0 && <span>Your cart is empty, <Link to='/'>Start shopping</Link></span>}
      </div>

			{cart.length>0 && <div>
				<h2>Checkout</h2>
				<div>Total: <span>${Intl.NumberFormat('es-AR').format(total)}</span></div>
			</div>}
    </div>
  );
};

export default Cart;