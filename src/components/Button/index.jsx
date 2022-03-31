import React from "react";
import "../Button/index.css"

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="add-button">
            {children}
        </button>
    )
}

export default Button