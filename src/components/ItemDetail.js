import React from 'react'

const ItemDetail = ({
    image,
    name,
    description,
    price,
    stock,
    callBack
}) => {

    return (
        <div>
            <div onClick={callBack}>
                <span>close</span>
            </div>
            <div>
                <img src={image}/>
            </div>

            <section>
                <div>
                    <h2>{name}</h2>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h4>${price}</h4>
                        {stock
                            ? <span>STOCK DISPONIBLE:
                                    <b>{stock}</b>
                                </span>
                            : <span>SIN STOCK</span>
}

                    </div>
                </div>

            </section>
        </div>
    )
}

export default ItemDetail