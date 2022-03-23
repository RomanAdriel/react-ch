import React, {useEffect, useState} from 'react'
import {InfinitySpin }  from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import ItemList from './ItemList'
import productsFetched from './products.json'

const ItemListContainer = () => {

	const [products, setProducts] = useState()
	const [loading, setLoading] = useState(true)
	let { catID } = useParams()

	useEffect(() => { 
		const request = new Promise((res, rej) => {
			setLoading(true)
			setTimeout(() => { res(productsFetched) }, 2000)
		})
	
		request.then((result) => {
			setProducts( 
				catID==undefined?result:result.filter( (value) => value.category == catID )
			)
			setLoading(false)
		})
	}, [catID])


	return(
		<>
			<span className='greetings'>You want it, you find it</span>
			<div className='container'>
				{	loading?<InfinitySpin color="orange" />:<ItemList products={ products } /> }
			</div>
		</>
	)
}

export default ItemListContainer