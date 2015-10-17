app.Recipe = Backbone.Model.extend({
	defaults: {
		image: '/images/recipe-photo.jpg',
		name: 'No Recipe Name',
		author: 'Unknown Author',
		category: 'Unknown',
		cook_time: '0',
		prep_time: '0',
		cook_temperature: '0',
		yield_key: 'None',
		yield_value: '0',
		ingredient_amount: '0',
		ingredient_name: 'None',
		directions: 'None',
		notes: 'None'
	}
});
