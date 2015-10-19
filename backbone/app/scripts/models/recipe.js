app.Recipe = Backbone.Model.extend({
	defaults: {
		image: '/images/recipe-photo.jpg',
		name: 'No Recipe Name',
		author: 'Unknown Author',
		category: 'Unknown',
		cook_time: null,
		prep_time: null,
		cook_temperature: null,
		yield_key: 'None',
		yield_value: null,
		ingredient_amount: null,
		ingredient_name: 'None',
		directions: 'None',
		notes: 'None'
	}
});
