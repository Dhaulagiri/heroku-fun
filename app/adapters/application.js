import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'https://api.heroku.com',
  headers: {
    "Accept": "application/vnd.heroku+json; version=3",
    "Authorization": "Bearer " + config.apiToken
  }
});
