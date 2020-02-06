import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = ({ employee }) => {
    return (
        <h1 className="mx-auto">
            <FontAwesomeIcon icon={faIdCard} />
            Employee Directory
        </h1>
    );
};

export default Header;
