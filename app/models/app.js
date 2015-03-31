import DS from 'ember-data';

var App = DS.Model.extend({
  name: DS.attr('string')
});

// TODO - This can be removed once backend is complete
App.reopenClass({
  FIXTURES: [
    { "id": "01234567-89ab-cdef-0123-456789abcdef", "name": "example" },
    { "id": "8c998313-d8e0-401a-9c64-fef88c3f6f39", "name":"powerful-reaches-7239" },
    { "id": "35392931", "name":"fast-sierra-4807" }
  ]
});

export default App;
