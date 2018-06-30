import Component from '@ember/component';

export default Component.extend({
    tagName: 'li',
    actions: {
        favorite(){
            this.sendAction('on-fav-clicked', this.get('org')); // the second property allows me to pass the org object up to the orgs.js action
        }
    }
});
