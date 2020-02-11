import React from "react";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
    return (
        <div className="display-container border pt-4">
            <div className="row">
                <h1 className="mx-auto">
                    {user.name.first} {user.name.last}
                </h1>
            </div>
            <div className="row">
                <img
                    className="rounded-circle mx-auto pt-3"
                    src={user.picture.large}
                    alt="user"
                ></img>
            </div>
            <div className="pl-5 pt-3">
                <p className="text-muted m-0 user-detail pt-1">
                    <span className="font-weight-bold">Location:</span>{" "}
                    {user.location.city}, {user.location.state}
                </p>
                <p className="text-muted m-0 user-detail">
                    <span className="font-weight-bold">Department:</span>{" "}
                    Marketing & Sales
                </p>
                <p className="text-muted m-0 user-detail">
                    <span className="font-weight-bold">Email:</span>
                    {user.email}
                </p>
                <p className="text-muted m-0 user-detail">
                    <span className="font-weight-bold">Mobile:</span>{" "}
                    {user.mobile || user.cell}
                </p>
                <p className="text-muted m-0 user-detail">
                    <span className="font-weight-bold">Office:</span>{" "}
                    {user.office || user.phone}
                </p>
            </div>
        </div>
    );
};

export default UserDetails;
