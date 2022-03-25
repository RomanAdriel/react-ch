import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import './Item.scss'

const Item = (props) => {
	const navigate = useNavigate()
	let location = useLocation()
	const click = () => { navigate(`/product/${props.id}`) }
	
	return (
		<article className='card card-shadow'>
			<h2>{props.title}</h2>
			<img src={props.pictureUrl} />
			<span>Stock: <b>{props.stock}</b></span>
			<span className='price'>$<b>{Intl.NumberFormat('es-AR').format(props.price)}</b></span>
			<button onClick={ click }>DETAILS</button>
		</article>
	)
}

export default Item