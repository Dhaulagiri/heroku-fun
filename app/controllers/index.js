import Ember from 'ember';

export default Ember.Controller.extend({
  isHidden: true,
  actions: {
    addApp: function() {
      var isHidden = this.get('isHidden');
      if (isHidden) {
        this.set('isHidden', false);
      } else {
        this.set('isHidden', true);
      }
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
