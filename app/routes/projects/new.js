import Route from '@ember/routing/route';

export default Route.extend({
    model(){
		return {copy:{}, owner: this.store.findAll('developer')};
	},

	actions:{
		save(project){
			project=this.store.createRecord("project", project.copy);
			project.save().then(this.transitionTo('projects'));
		}
	}
});
