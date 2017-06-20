import Ember from 'ember';

export function knowPopularity(params/*, hash*/) {
  var know = params[0];

  if(know.get('answers').get('length') >=5) {
    return Ember.String.htmlSafe( '<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(knowPopularity);
