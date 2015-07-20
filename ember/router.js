emCookbook.Router.map(function () {
    this.resource('home', {path: '/'}, function() {
        this.resource('signin');
        this.resource('signup');
    });
    this.resource('create', {path: 'new-recipe'});
    this.resource('recipes', {path: 'all-recipes'});
    this.resource('recipe');
});