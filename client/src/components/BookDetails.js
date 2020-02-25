// React
import React, { Component } from "react";

// Antd
import { Card, Icon, Avatar, Col } from "antd";

// Components
import BackButton from "./BackButton";

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
                        <BackButton />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="delete" key="delete" />
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={title}
                        description={moment(date_posted).fromNow()}
                    />
                    <p>Owner: {owner}</p>
                    <p>Author: {author}</p>
                    <p>Category: {category}</p>
                    <p>{description}</p>
                </Card>
            </Col>
        );
    }
}

export default BookDetails;
