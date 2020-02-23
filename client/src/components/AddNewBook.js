import React, { Component } from "react";
import { Form, Input, Select, Upload, Icon, Button } from "antd";

class AddNewBookForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };
    normFile = e => {
        console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { Option } = Select;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 }
            }
        };
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Add new book</h1>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="Title">
                        {getFieldDecorator("title", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input book title!"
                                }
                            ]
                        })(<Input placeholder="Enter book title" />)}
                    </Form.Item>
                    <Form.Item label="Author">
                        {getFieldDecorator("author", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input book author!"
                                }
                            ]
                        })(<Input placeholder="Enter book title" />)}
                    </Form.Item>
                    <Form.Item label="Description">
                        {getFieldDecorator("description", {
                            rules: [
                                {
                                    required: true,
                                    message:
                                        "Tell something more about the book!"
                                }
                            ]
                        })(<Input placeholder="Enter description" />)}
                    </Form.Item>

                    <Form.Item label="Category" hasFeedback>
                        {getFieldDecorator("category", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please select a book category!"
                                }
                            ]
                        })(
                            <Select placeholder="Please select a book category">
                                <Option value="action">Action</Option>
                                <Option value="crime">Crime</Option>
                                <Option value="fantasy">Fantasy</Option>
                                <Option value="horror">Horror</Option>
                                <Option value="other">Other</Option>
                                <Option value="romance">Romance</Option>
                                <Option value="sci-fi">Science Fiction</Option>
                                <Option value="thriller">Thriller</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="Image">
                        {getFieldDecorator("upload", {
                            valuePropName: "fileList",
                            getValueFromEvent: this.normFile
                        })(
                            <Upload
                                name="book_image"
                                action="/upload.do"
                                listType="picture"
                            >
                                <Button>
                                    <Icon type="upload" /> Click to upload
                                </Button>
                            </Upload>
                        )}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </>
        );
    }
}

const AddNewBook = Form.create({ name: "validate_other" })(AddNewBookForm);

export default AddNewBook;
