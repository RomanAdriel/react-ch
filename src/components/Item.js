import React from 'react'

const Item = ({ product }) => {
    return (
        <div className="productCard">
            <h2>{product.nombre}</h2>
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_820778-MLA47861063417_102021-F.webp"/>
            <p>Precio : ${product.precio}</p>
            <p>Ver detalle del producto</p>
        </div>
    )
}

export default Item