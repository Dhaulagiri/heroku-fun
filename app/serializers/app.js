import DS from 'ember-data';

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
  },
  // Override default serializer so that we pass raw json object to API
  // i.e. - don't wrap JSON in model name
  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  }
});
