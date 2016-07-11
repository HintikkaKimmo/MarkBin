/**
 * Created by Kimmo on 11.7.2016.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount() {
        // Render the Blaze accounts form then find the div
        // we just rendered in the 'render' method and place
        // the Blaze accounts form the that div
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        // Go find the form we created and destroy them
        // We need to clean up those form ourselves!!!
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container"></div>
        );
    }
}

export default Accounts;