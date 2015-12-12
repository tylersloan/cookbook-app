app.Recipe = Backbone.Model.extend({
	defaults: {
		recipe_image: '/images/recipe-photo.jpg',
		recipe_name: 'No Recipe Name',
		recipe_author: 'Unknown Author',
		recipe_category: 'Unknown',
		cook_time: null,
		prep_time: null,
		cook_temperature: null,
		yield_key: 'None',
		yield_value: null,
		ingredient_key: null,
		ingredient_value: 'None',
		recipe_directions: 'None',
		other_notes: 'None'
	}
});
