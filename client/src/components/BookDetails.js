// React
import React, { Component } from "react";

// Antd
import { Card, Icon, Avatar, Col, Row } from "antd";

// Utilities
import axios from "axios";

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
                console.log(res.data);
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
            <Card
                cover={<img alt="example" src={image} />}
                actions={[
                    <Icon type="left" key="left" />,
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />
                ]}
            >
                <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={title}
                    description={description}
                />
                <p>{owner}</p>
                <p>{date_posted}</p>
                <p>{author}</p>
                <p>{category}</p>
            </Card>
        );
    }
}

export default BookDetails;
