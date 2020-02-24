// React
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Styles
import "antd/dist/antd.css";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import BookList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import AddNewBook from "./components/AddNewBook";
import UserBooksList from "./components/UserBooksList";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={BookList} />
                        <Route path="/book/:id" component={BookDetails} />
                        <Route path="/addbook" component={AddNewBook} />
                        <Route
                            path="/user/:username"
                            component={UserBooksList}
                        />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
