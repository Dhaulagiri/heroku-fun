import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'https://api.heroku.com',
  headers: {
    "Authorization": "Bearer " + config.apiToken
  }
});
