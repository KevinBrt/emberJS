import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(param){
        let storiesProject = null;
        this.store.query('story', {
            filter: {
                project: param.project_id
            }
        }).then(function(stories){
            storiesProject = stories;
        });
        

        return RSVP.hash({
            project: this.store.findRecord('project',param.project_id),
            stories: storiesProject
        });
    }
});
