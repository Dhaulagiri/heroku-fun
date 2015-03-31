import DS from 'ember-data';
import Ember from 'ember';

// I was getting trolled by some deserialization issues with the default
// REST deserializer, so I added this basic wrapper
// Given more time I would try to investigate more why I was seeing the errors
// I was
export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var data = {};
    var extracted = [];
    var root = Ember.String.pluralize(type.typeKey);

    payload.forEach(function(e){
      extracted.push(e);
    });

    data[root] = extracted;

    return this._super(store, type, data);
  }
});
