window.Tutorial = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
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
        image_url: 'https://download.unsplash.com/photo-1423483641154-5411ec9c0ddf'
    },
    {
        name: 'Hamburger',
        image_url: 'https://download.unsplash.com/photo-1423483641154-5411ec9c0ddf'
    },
    {
        name: 'Cheesecake',
        image_url: 'https://download.unsplash.com/photo-1423483641154-5411ec9c0ddf'
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

/* Router */
Tutorial.Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'recipe/:id': 'recipe'
    },

    index: function () {
        console.log('index route');
    },

    recipe: function (id) {
        console.log('view recipe with ID: ' + id);
    }
});

var newRouter = new Tutorial.Router;
Backbone.history.start();