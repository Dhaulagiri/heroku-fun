import Ember from 'ember';
import layout from '../templates/components/application-item';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['list-group-item']
});
