$(function() {
	var recipes = [
		{
			image: '/images/recipe-photo.jpg',
			name: 'Recipe One Name',
			author: 'Tyler Sloan',
			category: 'Dinner',
			cook_time: '20 minutes',
			prep_time: '40 minutes',
			cook_temperature: '425',
			yield_key: 'servings',
			yield_value: '8',
			ingredient_amount: '4',
			ingredient_name: 'ingredients',
			directions: 'Directions go here',
			notes: 'Notes go here.'
    },
    {
      image: '/images/recipe-photo.jpg',
      name: 'Recipe Two Name',
      author: 'Tyler Graham Sloan',
      category: 'Lunch',
      cook_time: '10 minutes',
      prep_time: '40 minutes',
      cook_temperature: '425',
      yield_key: 'servings',
      yield_value: '8',
      ingredient_amount: '4',
      ingredient_name: 'ingredients',
      directions: 'Directions go here',
      notes: 'Notes go here.'
    }
  ];

	new app.CookbookView( recipes );
});
