import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {useState} from 'react'
import {useEffect} from 'react'


const ItemListContainer = (props) => {

    const stock = 10;
    const initial = 1;

    let initialProducts = [
        {
            id: 1,
            nombre: "First Product",
            precio: 1000
        },
        {
            id: 2,
            nombre: "Second Product",
            precio: 2000
        },
        {
            id: 3,
            nombre: "Third Product",
            precio: 3000
        }
    ]

    const { saludo } = props
    const [products, setProducts] = useState([])

    useEffect(() => {
            
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(initialProducts)
            },2000)
        })
        
        pedido
        .then((resultado)=>{
            setProducts(resultado)
        })
        .catch((error)=>{
            console.log("Failed to retrieve products")
        })
    
    })

    return (
        <div>
            <p>{saludo}</p>
            <ItemCount stock={stock} initial={initial}/>
            <ItemList products={products}/>
        </div>

    );
}

export default ItemListContainer;