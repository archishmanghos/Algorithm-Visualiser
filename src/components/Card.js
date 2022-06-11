import React from "react";

export default function Card(props){
    return (
        <div class="card card--main" style={{width: "18rem"}}>
            <img class="card-img-top" src={`/assets/${props.coverImg}`} alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text card--text">{props.title}</p>
            </div>
        </div>
    )
}