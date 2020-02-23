// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Antd
import { Card, Icon, Avatar, Col, Row } from "antd";

// Utilities
import axios from "axios";
import moment from "moment";
// import "moment/locale/pl";

class BooksList extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/api/books/")
            .then(res => {
                this.setState({
                    books: res.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
    render() {
        const { Meta } = Card;
        return (
            <Row className="row" gutter={16}>
                {this.state.books.map(book => (
                    <Col key={book.date_posted} span={6}>
                        <Card
                            cover={<img alt="example" src={book.image} />}
                            actions={[
                                <Icon type="setting" key="setting" />,
                                <Icon type="edit" key="edit" />,
                                <NavLink to={`/book/${book.id}`}>
                                    <Icon type="right" key="right" />
                                </NavLink>
                            ]}
                        >
                            <Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={book.title}
                                description={moment(book.date_posted).fromNow()}
                            />
                            <hr />
                            <NavLink to="/">Owner: {book.owner}</NavLink>
                            <p>Author: {book.author}</p>
                            <p>Category: {book.category}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default BooksList;
