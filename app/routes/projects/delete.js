import Route from '@ember/routing/route';

export default Route.extend({

    actions:{
        delete(project){
            project.destroyRecord().then(()=>{
                this.transitionTo('projects');
            });
        }
    }
});
