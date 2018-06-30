import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return $.get(`https://api.github.com/orgs/${params.id}`).then(rawOrg => {
            rawOrg.oldId = rawOrg.id;
            rawOrg.id = rawOrg.name;
            return rawOrg;
        })
    },
    actions: {
        error(error){
            if(error.status === 404){
                this.intermediateTransitionTo('org.notfound');
            } else {
                return true; // bubble up to the application error template.
            }
        }
    }
});
