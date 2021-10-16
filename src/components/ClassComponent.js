import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

