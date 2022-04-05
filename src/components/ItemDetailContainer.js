import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import { getDocs, query , where } from 'firebase/firestore'

import { fbCollection , dbFirestore } from '../firebase'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
	const [product, setProduct] = useState()
	const [loading, setLoading] = useState(true)
	let { itemID } = useParams()
	
	useEffect(() => {
		const document = getDocs(query(fbCollection, where('id', '==', parseInt(itemID) )))
		document.then( (res) => {
			setLoading(true)
			setProduct( res.docs[0].data() )
		})
	
		document.finally( () => {
			setLoading(false)
		})	

	}, [itemID])
	
	return (
		<> { console.log(product)}
			{ loading?<div className='container'><InfinitySpin color="orange" /></div>:<ItemDetail { ...product } /> }
		</>
	)
}

export default ItemDetailContainer