import React, {useEffect, useState} from 'react'
import {InfinitySpin }  from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { getDocs, query , where } from 'firebase/firestore'

import { fbCollection } from '../firebase'
import ItemList from './ItemList'	

const ItemListContainer = () => {

	const [products, setProducts] = useState({})
	const [loading, setLoading] = useState(true)
	let { catID } = useParams()

	useEffect(() => { 
		const q = catID?query(fbCollection, where('category', '==', catID)):query(fbCollection)

		const documents = getDocs(q)
		documents.then( (res) => {
			setLoading(true)
			setProducts( res.docs.map( doc => doc.data() ) )
		})
	
		documents.finally( () => {
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