import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        setSelectionDev: function(selected){
            this.set("model.copy.owner", this.store.findRecord("developer", selected));
        },
        setSelectionTag: function(selected){
            this.set("model.copy.tag", this.store.findRecord("tag", selected));
        }
    }
});
