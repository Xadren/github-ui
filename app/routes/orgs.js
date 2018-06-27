import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
export default Route.extend({
    favorites: service(),

    setupController(controller){
        this._super(...arguments);
        controller.set('items', this.get('favourites.items'));
    },
    model() {
        return [
            {id: 'facebook', name: 'Facebook'},
            {id: 'netflix', name: 'Neflix'},
            {id: 'ember-cli', name: 'Ember CLI'},
            {id: 'microsoft', name: 'Microsoft'}
        ]
    },
    actions: {
        addToItems(org) {
            this.get('favorites').favoriteItem(org);
        }
    }
});
