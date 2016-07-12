/**
 * Created by Kimmo on 12.7.2016.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsMain extends  Component {
    render() {
        return (
            <div>BinsMain</div>
        );
    }
}

export default createContainer((props) => {
    const { binId } = props.params;
    Meteor.subscribe('bins');

    return { bin: Bins.findOne(binId)};
}, BinsMain);
