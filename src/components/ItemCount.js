import {useState} from 'react'

const ItemCount = (props) => {

    const {stock, initial} = props;

    const [state,
        setState] = useState(initial);

    const onAdd = () => {
        if (stock > 0) {
            alert(state.toString() + " productos agregados al carrito");
        }
    }

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
                <p>
                    {state}
                </p>
                <button onClick={addProduct}>+</button>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>

        )
    }

    export default ItemCount