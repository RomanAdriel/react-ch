import React, { useState, useEffect, useContext } from 'react'
import './CartWidget.scss'
import { contextFromCart } from '../context/CartContext';


const CartWidget = () => {

    const [ripple, setRipple] = useState(false)
    const { quantity } = useContext(contextFromCart);	
	
	useEffect(() => {
		setRipple(true)
		setTimeout(()=> { setRipple(false) }, 500)
	}, [quantity])

    return (
        <>
        <span className="material-icons-outlined">
            shopping_cart
        </span>
        { quantity>0 && <span className={'quantity-cart ' +  (ripple && 'add-ripple')  }>{quantity}</span> 
		}
        </>
    );
}

export default CartWidget;