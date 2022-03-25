import React, {createContext, useState, useEffect} from 'react'

export const contextFromCart = createContext()
const { Provider } = contextFromCart

const CartContext = ({ children }) => {

	const [cart, setCart] = useState([])
	const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

	useEffect(() => {
		let auxCount = 0
		cart.forEach(item => {
			auxCount+=item.price*item.qt
		})
		setTotal(auxCount)
	}, [cart])
	
	const addItem = (id, qt, title, price) => {
		if (cart.length == 0){
			setCart( [{id, qt, title, price }] )
			setQuantity(qt)
		}else{
			if (!isInCart(id)) {
				setCart( [...cart, {id, qt, title, price }] )
			}else{
				let auxCart = cart.slice()
				let index = cart.findIndex(value => value.id == id)
				auxCart[index].qt += qt
				setCart(auxCart)
			}
			setQuantity(quantity + qt)
		}
	}

	const removeItem = (itemIndex) => {
		let auxCart = cart.slice()
		setQuantity(quantity - auxCart[itemIndex].qt)
		auxCart.splice(itemIndex, 1)
		
		setCart( auxCart )
	}

	const clearCart = () => {
		setCart([])
		setQuantity(0)
	}

	const isInCart = (itemID) => {
		return cart.some((item) => item.id == itemID)
	}

	const initialContext = { 
		cart,
		quantity,
		total,
		addItem,
		removeItem,
		clearCart
	}

	return (
		<Provider value={initialContext}>{children}</Provider>
	)
}

export default CartContext