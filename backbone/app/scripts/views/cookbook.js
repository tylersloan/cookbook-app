app.CookbookView = Backbone.View.extend({
  el: '#recipes',

  initialize: function( initialRecipes ) {
    this.collection = new app.Cookbook( initialRecipes );
    this.listenTo ( this.collection, 'add', this.renderRecipe );
    this.render();
  },

  render: function() {
    this.collection.each(function( item ) {
      // console.log( item.attributes );
      this.renderRecipe( item );
    }, this)
  },

  events: {
    'click #js-save-recipe': 'add',
    'click .js-delete': 'deleteRecipe'
  },

  add: function(e) {
    e.preventDefault();

    var formData = {};

    $("#js-add-recipe-form input").each(function(i, el) {
      var foo = $( el ).attr('id');
      var bar = $( el ).val();

      formData[ foo ] = bar;

      console.log( foo, bar );
    });

    var item = new app.Recipe();
    item.save(formData);

    console.log(item);

    this.collection.add( new app.Cookbook( item ) );
  },

  deleteRecipe: function() {
    this.model.destroy();
    this.el.remove();
  },

  renderRecipe: function( item ) {
    var recipeView = new app.RecipeView({
      model: item
    });
    this.$el.append( recipeView.render().el );
  }
});
