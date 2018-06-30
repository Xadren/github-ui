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

        // Request orgs from github api
        // return $.get(`https://api.github.com/organizations`).then(rawOrgs => {
        //     return rawOrgs.map(rawOrg => {
        //         rawOrg.oldId = rawOrg.id;
        //         rawOrg.id = rawOrg.login;
        //         return rawOrg;

        //     })
        // })
    },
    actions: {
        addToItems(org) {
            this.get('favorites').favoriteItem(org);
        },
        linksToggle(){
            console.log("toggled");
        }
    }
});
