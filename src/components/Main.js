import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart';

const Main = () => {
	
	return (
		<main>
			<Routes>
				<Route path="*" element={<ItemListContainer/>} />
				<Route path="/" element={<ItemListContainer/>} />
				<Route path="/category/:catID" element={<ItemListContainer/>} />
				<Route path="/product/:itemID" element={<ItemDetailContainer /> } />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</main>
	)
}

export default Main