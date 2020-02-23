// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Antd
import { Card, Icon, Avatar, Col } from "antd";

// Utilities
import axios from "axios";
import moment from "moment";

class BookDetails extends Component {
    state = {
        book: {}
    };
    componentDidMount() {
        const bookId = this.props.match.params.id;
        axios
            .get(`http://127.0.0.1:8000/api/book/${bookId}`)
            .then(res => {
                this.setState({
                    book: res.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
    render() {
        const {
            image,
            description,
            title,
            owner,
            date_posted,
            author,
            category
        } = this.state.book;
        const { Meta } = Card;
        return (
            <Col style={{ justifyContent: "center" }} offset={6} span={12}>
                <Card
                    cover={<img alt="example" src={image} />}
                    actions={[
                        <NavLink to="/">
                            <Icon type="left" key="left" />
                        </NavLink>,
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={title}
                        description={moment(date_posted).fromNow()}
                    />
                    <NavLink to="/">Owner: {owner}</NavLink>
                    <p>Author: {author}</p>
                    <p>Category: {category}</p>
                    <p>{description}</p>
                </Card>
            </Col>
        );
    }
}

export default BookDetails;
