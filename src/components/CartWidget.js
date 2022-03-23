import React, { useState, useEffect } from 'react'
import './CartWidget.scss'


const CartWidget = ({cartItems}) => {

    const [ripple, setRipple] = useState(false)
	
	useEffect(() => {
		setRipple(true)
		setTimeout(()=> { setRipple(false) }, 500)
	}, [cartItems])

    return (
        <>
        <span className="material-icons-outlined">
            shopping_cart
        </span>
        { cartItems>0 && <span className={'quantity-cart ' +  (ripple && 'add-ripple')  }>{cartItems}</span> 
		}
        </>
    );
}

export default CartWidget;