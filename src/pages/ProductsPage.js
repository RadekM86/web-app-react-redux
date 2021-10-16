import React, { useState } from 'react';
import './ProductsPage.css';
import Card from '../components/Card';
export default function ProductsPage() {
    const collection = [{
        name: 'piernik',
        price: 40,
        type: 'świąteczne',
        img: 'https://as1.ftcdn.net/v2/jpg/02/96/09/24/1000_F_296092416_C0kr5wWym1DB7z75QS6gFFybO2Q7IhRL.jpg'
    }]
    const [data, setData] = useState(collection);

    return (
      <div className="products-root">
        {data.map((item) => (
          <Card
            name={item.name}
            type={item.type}
            price={item.price}
            img={item.img}
          >
            <button className="but-decrement">-</button>
            <button className="but-increment">+</button>
          </Card>
        ))}
      </div>
    );
}
