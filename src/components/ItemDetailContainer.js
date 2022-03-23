import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'

import ItemDetail from './ItemDetail'
import productsFetched from './products.json'

const ItemDetailContainer = ({setCartItems, cartItems}) => {
	const [product, setProduct] = useState()
	const [loading, setLoading] = useState(true)
	let { itemID } = useParams()
	
	useEffect(() => {
		setLoading(true)
		const request = new Promise((res, rej) => {
			setTimeout(() => { res(productsFetched) }, 2000)
		})
	
		request.then((result) => {
			setProduct( itemID==undefined?[]:result.filter( (value) => value.id == itemID ) )
			setLoading(false)
		})	

	}, [itemID])
	
	return (
		<>
			{ loading?<div className='container'><InfinitySpin color="orange" /></div>:<ItemDetail {...product[0]} setCartItems={setCartItems} cartItems={cartItems} /> }
		</>
	)
}

export default ItemDetailContainer