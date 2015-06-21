/* Model */
var Recipe = Backbone.Model.extend({

    defaults: {
        name: 'Recipe Name',
        judgement: 'good'
    }

});

/* View */
var RecipeView = Backbone.View.extend({
    tagName: 'li',
    className: 'recipe-class',

    events: {
        'click .recipe-class': 'log'
    },

    template: _.template('<%= name %> is <%= judgement %>'),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

/* Collection */
var RecipeCollection = Backbone.Collection.extend({
    model: Recipe
});

/* Manually add models to collection */
var recipeCollection = new RecipeCollection([
    {
        name: 'Soup',
        judgement: 'soupy'
    },
    {
        name: 'Burger',
        judgement: 'delicious'
    },
    {
        name: 'Cheesecake',
        judgement: 'to die for'
    }
]);

/* All Recipes View */
var RecipesView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
        this.collection;
    },

    render: function () {
        this.collection.each(function (Recipe) {
            var recipeView = new RecipeView({ model: Recipe });
            $('body').append(recipeView.el);
        })
    }
});

var recipesView = new RecipesView({
    collection: recipeCollection
});

recipesView.render();