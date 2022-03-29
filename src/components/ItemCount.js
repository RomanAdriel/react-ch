import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './ItemCount.scss'


const ItemCount = ({initial, stock, onAdd, quantity}) => {

	const [initialValue, setInitialValue] = useState( initial )
	const navigate = useNavigate()

	const substractItem = () => {
		if (initialValue > 1)
		setInitialValue( initialValue - 1 )
	}
	const addItem = () => {
		if (initialValue < stock)
		setInitialValue( initialValue + 1 )
	}
	const buyItem = () => {
		setInitialValue( 1 )
		onAdd(initialValue)
	}
	
	return (
		<div className='itemCount'>
			<div className='itemCount__controls'>
				<button onClick={ substractItem }><span className="material-icons-outlined">remove</span></button>
				<span><b>{ initialValue }</b></span>
				<button onClick={ addItem }><span className="material-icons-outlined">add</span></button>
			</div>
			<button className='itemCount__controls--big' onClick={ () => buyItem()  } disabled={ stock==0 }>
					<span className="material-icons-outlined">shopping_cart</span>
					<span>ADD</span>
			</button>
			<button className='itemCount__controls--big' onClick={ () => navigate('/cart')  } disabled={ quantity==0 }>
					<span className="material-icons-outlined">shopping_bag</span>
					<span>FINISH SHOPPING</span>
			</button>
		</div>
	)
}

export default ItemCount