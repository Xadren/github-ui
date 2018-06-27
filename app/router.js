import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  // List of orgs
  this.route('orgs'); // /orgs

  // A single org
  this.route('org', {path: 'org/:id'}, function() { // /org/ember -> redirects to /org/ember/repos
    this.route('repos'); // List of org repos
    this.route('repo', {path: '/:repoid'}, function() {  // /org/ember/emberjs -> redirects to /org/ember/ember.js/issues
      this.route('contributors');
      this.route('issues');
    }); 
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
