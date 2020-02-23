// React
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Antd
import { Icon } from "antd";

class BackButton extends Component {
    render() {
        return (
            <Icon onClick={this.props.history.goBack} type="left" key="left" />
        );
    }
}

export default withRouter(BackButton);
