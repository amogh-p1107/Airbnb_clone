import React  from "react";
import Card from "./card";
import "./styles.css";
function Cards({list}) {
    return (
    <div className="cards-flex">
        {list.map((card, i) => (
            <Card card={card} key={i} />
        ))}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
        
    </div>
    );
}

export default Cards;
