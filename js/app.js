window.Tutorial = {
    Models: {},
    Collections: {},
    Views: {}
};

Tutorial.Models.Recipe = Backbone.Model.extend({
    defaults: {
        name: 'Recipe Name',
        category: 'dinner'
    }
});

Tutorial.Views.Recipe = Backbone.View.extend({
    tagName: 'ul',
    className: 'recipe',
    template: _.template($('#recipes-template').html()),
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

Tutorial.Collections.Recipe = Backbone.Collection.extend({
    model: Tutorial.Models.Recipe
});

var recipesCollection = new Tutorial.Collections.Recipe([
    {
        name: 'Salad',
        category: 'appetizer'
    },
    {
        name: 'Hamburger',
        category: 'lunch'
    },
    {
        name: 'Cheesecake',
        category: 'dessert'
    }
]);

Tutorial.Views.Recipes = Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
        this.collection;
    },

    render: function () {
        this.collection.each(function (Recipe) {
            var recipeView = new Tutorial.Views.Recipe({ model: Recipe });
            $('body').append(recipeView.el);
        })
    }
});

var recipesView = new Tutorial.Views.Recipes({ collection: recipesCollection });
recipesView.render();