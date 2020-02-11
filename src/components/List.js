import React from "react";
import "./List.css";
import ListItem from "./ListItem";

const List = ({ users, getUserDetails, filteredUsers }) => {
    let userList;
    if (filteredUsers) {
        userList = filteredUsers;
    } else {
        userList = users;
    }

    return (
        <div className="list-container border">
            {userList.map(user => (
                <ListItem
                    key={user.email}
                    name={user.name}
                    email={user.email}
                    mobile={user.cell}
                    office={user.phone}
                    location={user.location}
                    picture={user.picture}
                    getUserDetails={getUserDetails}
                />
            ))}
        </div>
    );
};

export default List;
