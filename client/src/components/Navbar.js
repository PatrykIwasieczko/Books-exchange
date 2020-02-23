// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Antd
import { Menu, Icon } from "antd";

class Navbar extends Component {
    state = {
        current: "home"
    };

    handleClick = e => {
        this.setState({
            current: e.key
        });
    };
    render() {
        return (
            <Menu
                className="menu"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <NavLink to="/">
                        <Icon type="home" />
                        Home
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="about">
                    <Icon type="info" />
                    About
                </Menu.Item>
                <Menu.Item key="login">
                    <Icon type="login" />
                    Login
                </Menu.Item>
                <Menu.Item key="add">
                    <NavLink to="/addbook">
                        <Icon type="plus" />
                        Add new book
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Icon type="profile" />
                    Profile
                </Menu.Item>
                <Menu.Item key="logout">
                    <Icon type="logout" />
                    Logout
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navbar;
