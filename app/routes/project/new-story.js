import Route from '@ember/routing/route';

export default Route.extend({
    model(){
		return {copy:{}, owner: this.store.findAll('developer'), tags: this.store.findAll('tag')};
	},

	actions:{
		save(story){
			story=this.store.createRecord("story", story.copy);
			story.save().then(this.transitionTo('project', story.project));
		}
	}
});
