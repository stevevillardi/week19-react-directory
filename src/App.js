import React from "react";
import UserApi from "./user-api";
import Search from "./components/Search";
import List from "./components/List";
import UserDetails from "./components/UserDetails";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            selectedUser: null,
            users: null
        };
    }

    getUserDetails = user => {
        this.setState({
            selectedUser: user
        });
    };

    render() {
        const { isLoading, users, selectedUser } = this.state;

        if (isLoading) {
            return <></>;
        } else {
            return (
                <div className="container border bg-light">
                    <Search users={users} />
                    <div className="row">
                        <div className="col-md-6">
                            <List
                                users={users}
                                isLoading={isLoading}
                                getUserDetails={this.getUserDetails}
                            />
                        </div>
                        <div className="col-md-6">
                            <UserDetails user={selectedUser} />
                        </div>
                    </div>
                </div>
            );
        }
    }

    async componentDidMount() {
        // Load async data.
        let userData = await UserApi.get("/", {
            params: {
                results: 50,
                // seed: "foobar",
                exc: "registered,id",
                nat: "us"
            }
        });

        userData = userData.data.results;

        this.setState({
            ...this.state,
            ...{
                isLoading: false,
                users: userData,
                selectedUser: userData[0]
            }
        });
    }
}

export default App;
