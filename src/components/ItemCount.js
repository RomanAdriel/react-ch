import {useState} from 'react'

const ItemCount = (props) => {

    const {stock,
        initial,
        onAdd} = props;

    const [state,
        setState] = useState(1);

    const addProduct = () => {
        if (state < stock) {
            setState(state + 1);
        }

    }

    const removeProduct = () => {
        if (state > initial) {
            setState(state - 1);
        }

    }
    return (
        <div className="productCounter">
            <button onClick={removeProduct}>-</button>
            <p> {state} </p>
            <button onClick={addProduct}>+</button>
            <button onClick={(state) => onAdd(state)}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount