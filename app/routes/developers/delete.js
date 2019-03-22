import Route from '@ember/routing/route';

export default Route.extend({
    
    actions:{
        delete(dev){
            dev.destroyRecord().then(()=>{
                this.transitionTo('developers');
            });
        }
    }
   
});
