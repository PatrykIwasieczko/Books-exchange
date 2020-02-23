// App.js
import React, { Component } from "react";
import { Card, Icon, Avatar, Col, Row } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import Navbar from "./components/Navbar";

import "./App.css";

class App extends Component {
    state = {
        books: []
    };

    async componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/api/books/")
            .then(res => {
                this.setState({
                    books: res.data
                });
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const { Meta } = Card;
        return (
            <>
                <Navbar />
                <div className="container">
                    <Row className="row" gutter={16}>
                        {this.state.books.map(book => (
                            <Col key={book.date_posted} span={6}>
                                <Card
                                    // style={{ height: 300 }}
                                    cover={
                                        <img alt="example" src={book.image} />
                                    }
                                    actions={[
                                        <Icon type="setting" key="setting" />,
                                        <Icon type="edit" key="edit" />,
                                        <Icon type="right" key="right" />
                                    ]}
                                >
                                    <Meta
                                        avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        }
                                        title={book.title}
                                        description={book.description}
                                    />
                                    <p>{book.owner}</p>
                                    <p>{book.date_posted}</p>
                                    <p>{book.author}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </>
        );
    }
}

export default App;
