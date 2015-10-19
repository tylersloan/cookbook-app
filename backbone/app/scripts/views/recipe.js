app.RecipeView = Backbone.View.extend({
  tagName: 'div',
  className: 'recipe-view-classname',
  template: _.template( $("#js-tmpl-view-recipe").html() ),

  render: function() {
    // this.el is what's defined in tagName.
    // use $el to get access to jQuery html()
    this.$el.html(this.template( this.model.attributes ));

    return this;
  }
})
