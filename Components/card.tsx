import * as React from 'react';

interface CardProps {
    image: string,
    title: string,
    description: string
}



function Card (props: CardProps) {
    return (
        <div className="card col-md-2 text-white bg-dark card-custom-style">
            <img src={props.image} alt="image" className="card-img-top"/>
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">Click me</a>
            </div>
        </div>
    );
}

export default Card;
