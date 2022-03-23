import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart';

const Main = ({setCartItems, cartItems}) => {
	
	return (
		<main>
			<Routes>
				<Route path="*" element={<ItemListContainer nombre="Román"/>} />
				<Route path="/" element={<ItemListContainer nombre="Román"/>} />
				<Route path="/category/:catID" element={<ItemListContainer/>} />
				<Route path="/product/:itemID" element={<ItemDetailContainer setCartItems={setCartItems} cartItems={cartItems}/> } />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</main>
	)
}

export default Main