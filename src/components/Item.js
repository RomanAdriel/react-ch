import React from 'react'
import { useState } from 'react'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({ product }) => {

    const [showDetails, setShowDetails] = useState( false )

	const isDetails = () => { 
		setShowDetails(!showDetails)
    }

    return (
        <div className="productCard">
            <h2>{product.name}</h2>
            <img src={product.image}/>
            <p>Precio : ${product.price}</p>
            <button onClick={ isDetails } >Ver detalles del producto</button>
            { showDetails?<ItemDetailContainer {...product} callBack={ isDetails }/>:null }	
        </div>
    )
}

export default Item