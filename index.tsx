import * as React from 'react';
import * as ReactDOM from "react-dom";
import CardList from "./components/card-list"
import Card from "./components/card";
import * as axios from 'axios';



 
export class Product {
    id: string;
    image: string;
    url: string;
    title: string;
    description: string;
    ratings: Array<Int16Array>;
    
    constructor(id, image, url, title, description, ratings) {
    this.id = id;
    this.image = image;
    this.url = url;
    this.title = title;
    this.description = description;
    this.ratings= ratings;
 }
}



 
function App() {
    let [products, setProducts] = React.useState([]);
    async function getProducts() {
    let products_arr: Array<Product> = [];
    await axios.default.get("http://localhost:5000/").then(
        function(response)
        {
        let response_data= response['data']
        response_data.data.map((obj, index) => {
        let product = new Product(obj["Id"], obj["img"], obj["Url"], obj["Title"], obj["Description"], obj["Ratings"]);
        products_arr.push(product);
        // console.log(product);
        })
    
    setProducts(products_arr);
    }
    ).catch(
        function(error){
        console.log("Receved some error")
        console.log(error);
        return null;
        }
    )
    }
    React.useEffect(() => {
        getProducts();
    })
    return (
        <div className="container-fluid d-flex justify-content-center">
        <CardList data={products}/>
        </div>
    );
}
 
ReactDOM.render (
 <App />,
 document.getElementById("main-page")
);
