import * as React from "react"
import * as ReactDom from "react-dom"
import CardList from "./Components/card-list"

function App(){
    return (
        <div className="container-fluid d-flex justify-content-center" >
            <CardList/>
        </div>
    )
}


ReactDom.render(
    <App/>,
    document.getElementById("main-page")
)

