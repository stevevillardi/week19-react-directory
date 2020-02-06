import React from "react";
import "./List.css";
import ListItem from "./ListItem";

const List = ({ employee }) => {
    return (
        <div className="list-container border">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    );
};

export default List;
