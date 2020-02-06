import React from "react";
import "./ListItem.css";

const ListItem = ({ employee }) => {
    return (
        <div className="row border list-item">
            <div className="col-sm-2 pr-0 my-auto">
                <img
                    className="img-thumbnail user-img"
                    src={"https://randomuser.me/api/portraits/women/62.jpg"}
                    alt="user"
                ></img>
            </div>
            <div className="col-sm-5 pl-0 pt-1">
                <h5 className="mb-0">Susan Smith</h5>
                <p className="text-muted m-0 list-detail pt-1">
                    <span className="font-weight-bold">Location:</span> Florida,
                    United States
                </p>
                <p className="text-muted m-0 list-detail">
                    <span className="font-weight-bold">Department:</span>{" "}
                    Marketing & Sales
                </p>
            </div>
            <div className="col-sm-5 pl-0 pt-3">
                <p className="text-muted m-0 list-detail">
                    <span className="font-weight-bold">Email:</span>:
                    susan.smith@example.com
                </p>
                <p className="text-muted m-0 list-detail">
                    <span className="font-weight-bold">Mobile:</span>{" "}
                    111-222-3333
                </p>
                <p className="text-muted m-0 list-detail">
                    <span className="font-weight-bold">Office:</span>{" "}
                    111-222-3333
                </p>
            </div>
        </div>
    );
};

export default ListItem;
