import React from "react";
import "./UserDetails.css";

const UserDetails = ({ employee }) => {
    return (
        <div className="display-container border pt-2">
            <div className="row">
                <h1 className="mx-auto">Susan Smith</h1>
            </div>
            <div className="row">
                <img
                    className="rounded-circle mx-auto pt-3"
                    src={"https://randomuser.me/api/portraits/women/62.jpg"}
                    alt="user"
                ></img>
            </div>
            <div className="pl-5 pt-3">
                <p className="text-muted m-0 user-detail pt-1">
                    <span className="font-weight-bold">Location:</span> Florida,
                    United States
                </p>
                <p className="text-muted m-0 user-detail">
                    <span className="font-weight-bold">Department:</span>{" "}
                    Marketing & Sales
                </p>
                <p className="text-muted m-0 user-detail">
                    <span className="font-weight-bold">Email:</span>:
                    susan.smith@example.com
                </p>
                <p className="text-muted m-0 user-detail">
                    <span className="font-weight-bold">Mobile:</span>{" "}
                    111-222-3333
                </p>
                <p className="text-muted m-0 user-detail">
                    <span className="font-weight-bold">Office:</span>{" "}
                    111-222-3333
                </p>
            </div>
        </div>
    );
};

export default UserDetails;
