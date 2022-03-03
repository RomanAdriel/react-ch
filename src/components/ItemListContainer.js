import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    const stock = 10;
    const initial = 1;
    const onAdd = () => {
        alert("Productos agregados al carrito");
    }

    const { saludo } = props
    return (
        <div>
            <p>{saludo}</p>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        </div>

    );
}

export default ItemListContainer;