import Route from '@ember/routing/route';
import EmberObject,{set} from '@ember/object';

export default Route.extend({
	templateName: 'developers/new',
	afterModel(model){
		set(model, 'copy',EmberObject.create(model.toJSON()));
	},

	actions:{
		save(dev){
			dev.setProperties(JSON.parse(JSON.stringify(dev.copy)));
			dev.save().then(()=>{
				this.transitionTo('developers');
			})
		}
	}
});
