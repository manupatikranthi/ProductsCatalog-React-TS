import * as React from 'react';
import Card from "./card";
import { Product } from '..';

interface productProps {
    data: Array<Product>
}
function CardList(props: productProps) {

    return (
        <div className="row">
        {props.data.map((product, index) => {
        console.log(product.title);
        return <Card image={product.image} title={product.title} description={product.description}/>
        })}
        </div>
    );
}

export default CardList;
