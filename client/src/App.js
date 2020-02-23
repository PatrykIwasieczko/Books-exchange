// React
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Styles
import "antd/dist/antd.css";
import "./App.css";

// Component
import Navbar from "./components/Navbar";
import BookList from "./components/BooksList";
import BookDetails from "./components/BookDetails";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={BookList} />
                        <Route path="/book/:id" component={BookDetails} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
