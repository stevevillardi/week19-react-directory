import React from "react";
import "./List.css";
import ListItem from "./ListItem";

class List extends React.Component {
    render() {
        return (
            <div className="list-container border">
                {this.props.users.map(user => (
                    <ListItem
                        key={user.email}
                        name={user.name}
                        email={user.email}
                        mobile={user.cell}
                        office={user.phone}
                        location={user.location}
                        picture={user.picture}
                        getUserDetails={this.props.getUserDetails}
                    />
                ))}
            </div>
        );
    }
}

export default List;
