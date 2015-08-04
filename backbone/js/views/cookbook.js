app.CookbookView = Backbone.View.extend({
	el: '#recipes',

	initialize: function( initialRecipes ) {
		this.collection = new app.Cookbook( initialRecipes );
		this.render();
	},

	render: function() {
		this.collection.each(function( item ) {
			this.renderRecipe( item );
		}, this)
	},

	renderRecipe: function( item ) {
		var recipeView = new app.RecipeView({
			model: item
		});
		this.$el.append( recipeView.render().el );
	}
});
