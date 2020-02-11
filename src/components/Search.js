import React, { Component } from "react";
import Header from "./Header";
import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        };
    }

    handleInputChange = event => {
        // Updating the input's state
        this.setState(
            {
                searchTerm: event.target.value
            },
            () => {
                this.handleFormSubmit(event);
            }
        );
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        console.log("Triggered");
        if (this.state.searchTerm) {
            let searchResults = this.props.users.filter(user => {
                return (
                    user.name.first
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase()) ||
                    user.name.last
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase())
                );
            });

            this.props.getSearchUserDetails(searchResults);
        } else {
            this.props.getSearchUserDetails(null);
        }
    };

    render() {
        return (
            <nav className="navbar navbar-light bg-light row">
                <Header />
                <div className="col-md-12">
                    <form className="row">
                        <div className="col-12 col-sm pr-sm-0">
                            <input
                                className="form-control mr-sm-2"
                                name="searchTerm"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="col-12 col-sm-auto pl-sm-2">
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                                onClick={this.handleFormSubmit}
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Search;
