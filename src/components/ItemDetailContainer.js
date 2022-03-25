import React, {useEffect, useState} from 'react'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = (props) => {

	const [product, setProduct] = useState()

	useEffect(() => {
		
		const request = new Promise((res, rej) => {
			setTimeout(() => { res(props) }, 2000)
		})
	
		request.then((result) => {
			setProduct(result)
		})	
	}, [props])
	
	return (
		<div>
			<ItemDetail {...product} />
		</div>
	)
}

export default ItemDetailContainer