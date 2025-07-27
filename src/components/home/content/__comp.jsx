import React from "react";

export function ContComp({icon,title,text}){
    return (
    <div className="home-content1 home-content2">
            <div className="obj-half-icon icon-2">
                {icon}
            </div>
            <div className="obj-cont-comp-title">
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

export function ContComp2({title, text, button}){
    return(
        <div className="home-content3">
            <p>{title}</p>
            <p>{text}</p>
            <p>{button}</p>
        </div>
    );
};

export function ContComp3({icon, title}){
    return(
        <div className="todo-items">
            <div className="todo-img">{icon}</div>
            <p>{title}</p>
        </div>
    );
}
