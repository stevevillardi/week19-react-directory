import React from "react";
import Header from "./Header";
import "./Search.css";

const Search = ({ employee }) => {
    return (
        <nav className="navbar navbar-light bg-light row">
            <Header />
            <div className="col-md-12">
                <form className="row">
                    <div className="col-12 col-sm pr-sm-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>
                    <div className="col-12 col-sm-auto pl-sm-2">
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default Search;
