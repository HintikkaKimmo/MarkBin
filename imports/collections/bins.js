/**
 * Created by Kimmo on 11.7.2016.
 */

import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function () {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });
    }
});

export const Bins = new Mongo.Collection('bins');
