import Ember from 'ember';

let search = Ember.$.getJSON("http://www.omdbapi.com/?s=lord+of");

export default Ember.Route.extend({
  model() {
   return search;
  }
});
