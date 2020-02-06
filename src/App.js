import React from "react";
import UserApi from "./user-api";
import Search from "./components/Search";
import List from "./components/List";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
    return (
        <div className="container border">
            <Search />
            <div className="row">
                <div className="col-md-6">
                    <List />
                </div>
                <div className="col-md-6">
                    <UserDetails />
                </div>
            </div>
        </div>
    );
}

export default App;
