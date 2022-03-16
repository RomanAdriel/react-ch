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
            naem: "First Product",
            price: 1000,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
            id: 2,
            name: "Second Product",
            price: 2000,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
            id: 3,
            name: "Third Product",
            price: 3000,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
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