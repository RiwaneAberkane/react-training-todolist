import React from "react";
import "./Header.css";


type HeaderProps = {
    title : string;
};

export const Header = ({title} : HeaderProps) => {
    return(
        <div className="header">
            <p>{title}</p>
        </div>
        )
}


export default Header;