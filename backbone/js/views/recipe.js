app.RecipeView = Backbone.View.extend({
	//tagName: 'div',
	//className: 'recipe-view-classname',
	el: "#recipes-container",
	template: _.template( $('#js-tmpl-view-recipe').html() ),

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );
		return this;
	}
});
