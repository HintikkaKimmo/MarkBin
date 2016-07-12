/**
 * Created by Kimmo on 11.7.2016.
 */

import { Meteor } from 'meteor/meteor';

import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
      return Bins.find({ ownerId: this.userId });
  });
});
