import Ember from 'ember';

export default Ember.Controller.extend({
  isHidden: true,
  actions: {
    addApp: function() {
      this.set('isHidden', false);
    },
    saveApp: function() {
      var name = this.get('name');
      if (name.length > 0) {
        var newApp = this.store.createRecord('app', {
          name: name
        });

        newApp.save();
        this.set('name', '');
        this.set('isHidden', true);
      } else {
        // TODO - error trapping
      }
    }
  }
});
