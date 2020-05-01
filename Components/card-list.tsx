import * as React from 'react';
import * as products from '../data/products.json';
import Card from "./card";

function CardList() {
    return (
        <div className="row">
            {products.map((product, index) => {
                return <Card image={product.img} title={product.Title} description={product.Description}/>
            })}
        </div>
    );
}


export default CardList;
