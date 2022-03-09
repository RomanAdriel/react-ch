import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    const stock = 10;
    const initial = 1;

    const { saludo } = props
    return (
        <div>
            <p>{saludo}</p>
            <ItemCount stock={stock} initial={initial}/>
        </div>

    );
}

export default ItemListContainer;