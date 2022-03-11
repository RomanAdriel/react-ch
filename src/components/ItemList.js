import Item from "./Item"

const ItemList = ({ products }) => {
    return (
        <div className="productContainer">
            {products.map((product) => {
                return <Item key={product.id} product={product}/>
            })}
        </div>
    )
}

export default ItemList