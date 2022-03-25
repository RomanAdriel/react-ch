import React, {useState, useContext, useEffect} from "react";
import toast from "react-hot-toast";
import ItemCount from "./ItemCount";
import "./ItemDetail.scss";
import { contextFromCart } from '../context/CartContext';

const ItemDetail = ({id, pictureUrl, title, description, price, stock}) => {

  const { quantity, addItem } = useContext(contextFromCart);
	const [itemStock, setItemStock] = useState(stock)
	
  const onAdd = (value) => {
		toast.success(value>1?"Productos agregados al carrito.":"Producto agregado al carrito.")
		setItemStock(itemStock-value)
		addItem(id, value, title, price)
	};
	
  return (
    <article className="itemDetailBox">
      <div className="itemDetailBox__frame">
        <img src={pictureUrl} />
      </div>

      <section className="info">
        <div className="info__title">
          <h2>{title}</h2>
          <div className="info__title--overflow">
            <p>{description}</p>
          </div>
        </div>

        <div className="info__price">
          <div className="info__price__stock">
            <h4>${Intl.NumberFormat('es-AR').format(price)}</h4>
            {itemStock ? (
              <span className="info__price-stock">
                AVAILABLE STOCK: <b>{itemStock}</b>
              </span>
            ) : (
              <span className="info__price-nostock">NO STOCK</span>
            )}
          </div>
					{<ItemCount stock={itemStock} initial={1} onAdd={onAdd} quantity={quantity} />}
        </div>
      </section>
    </article>
  );
};

export default ItemDetail;