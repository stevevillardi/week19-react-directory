import React from "react";
import "./ListItem.css";

const ListItem = ({
    name,
    email,
    location,
    mobile,
    office,
    picture,
    getUserDetails
}) => {
    const user = {
        name: name,
        email: email,
        location: location,
        mobile: mobile,
        office: office,
        picture: picture
    };
    return (
        <div
            className="row border list-item"
            onClick={() => getUserDetails(user)}
        >
            <div className="col-sm-2 pr-0 my-auto">
                <img
                    className="img-thumbnail user-img"
                    src={picture.large}
                    alt="user"
                ></img>
            </div>
            <div className="col-sm-5 pl-0 pt-1">
                <h5 className="mb-0">
                    {name.first} {name.last}
                </h5>
                <p className="text-muted m-0 list-detail pt-1">
                    <span className="font-weight-bold">Location: </span>
                    {location.city}, {location.state}
                </p>
                <p className="text-muted m-0 list-detail">
                    <span className="font-weight-bold">Department:</span>{" "}
                    Marketing & Sales
                </p>
            </div>
            <div className="col-sm-5 pl-0 pt-3">
                <p className="text-muted m-0 list-detail">
                    <span className="font-weight-bold">Email:</span> {email}
                </p>
                <p className="text-muted m-0 list-detail">
                    <span className="font-weight-bold">Mobile:</span> {mobile}
                </p>
                <p className="text-muted m-0 list-detail">
                    <span className="font-weight-bold">Office:</span> {office}
                </p>
            </div>
        </div>
    );
};

export default ListItem;
