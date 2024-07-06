import React from "react";


const Square = (props) => {
    return (
        <div 
            onClick ={props.onClick}
        //this style prop takes an object in which we can add our css
        style={{ 
            
            border: "2px solid brown",
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "brown"           

        }}
        className="square">
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;