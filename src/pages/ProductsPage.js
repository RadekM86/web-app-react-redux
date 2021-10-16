import React, { useState, useEffect } from 'react';
import './ProductsPage.css';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../actions';
export default function ProductsPage() {
    const dispatch = useDispatch();
    const productList = useSelector(state =>state.products)
    const collection = [{
        name: 'piernik',
        price: 40,
        type: 'świąteczne',
        img: 'https://as1.ftcdn.net/v2/jpg/02/96/09/24/1000_F_296092416_C0kr5wWym1DB7z75QS6gFFybO2Q7IhRL.jpg'
    }]
    const [data, setData] = useState(collection);
    useEffect(()=>{
        const fetchProducts = async () => {
            const result = await fetch("/api/products");
            const lista = await result.json();
            setData(lista);
        }
        fetchProducts()
    },[setData]);

    return (
      <div className="products-root">
        {data.map((item) => (
          <Card
            name={item.name}
            type={item.type}
            price={item.price}
            img={item.img}
          >
            <button disabled={!productList.find(el => el._id ===item._id)} onClick={() => dispatch(removeProduct(item._id))} className="but-decrement">-</button>
            <button  onClick={() => dispatch(addProduct(item._id))} className="but-increment">+</button>
          </Card>
        ))}
      </div>
    );
}
