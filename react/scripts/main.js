/* Include React! */
var React = require('react');
var ReactDOM = require('react-dom');

/* Routing and Navigating with 'react-router' */
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

/* Include Helper Functions */
var h = require('./helpers');



/*
App App App!
 */
var App = React.createClass({
	getInitialState: function() {
		return {
			recipes: {}
		};
	},

	addRecipe: function(recipe) {
		var timestamp = (new Date()).getTime();

		// update state object
		this.state.recipes['recipe-' + timestamp] = recipe;

		// set state
		this.setState({ recipes: this.state.recipes });
	},

	loadSampleRecipes: function() {
		this.setState({
			recipes: require('./sample-recipes.js')
		});
	},

	renderRecipe: function(key) {
		return <Recipe key={key} index={key} details={this.state.recipes[key]} />
	},

	render: function() {
		var you = this.props.params.yourName;
		return (
			<div>
				<Header chef={you} />

				<main role="main">
					<section className="wrapper">
						<div className="flex-container">
							{/*<RenderedRecipe {...this.props} />*/}
							<ul className="list-of-recipes">
								{Object.keys(this.state.recipes).map(this.renderRecipe)}
							</ul>
						</div>

						<br/>
						<hr/>
						<br/>

						<div className="flex-container">
							<CreateRecipeForm loadSampleRecipes={this.loadSampleRecipes} addRecipe={this.addRecipe} chef={you} />
						</div>
					</section>
				</main>
			</div>
		)
	}
});

/*
Recipe
<Recipe />
 */
var Recipe = React.createClass({
	render: function() {
		var details = this.props.details;
		return (
			<li>
				<h1>{details.recipeName}</h1>
				<p>by: {details.recipeCreator}</p>
			</li>
		)
	}
})

/*
Header
<Header/>
 */
var Header = React.createClass({
	render: function() {
		return (
			<header className="flex-container">
			    <h1 className="flex-item">
			    	<a href="/" className="chef">{this.props.chef}'s Cookbook</a>
			    </h1>
			    <div className="user-controls flex-item">
			        <a id="js-add-recipe">Add Recipe</a>
			        <a>Log out</a>
			    </div>
			</header>
		)
	}
});

/*
Login
<Login/>
 */
var Login = React.createClass({
	mixins: [History],

	goToCookbook: function(e) {
		e.preventDefault();

		// get data from input
		var chef = this.refs.yourName.value;

		// navigate from <Login /> to <App />
		this.history.pushState(null, '/cookbook/' + chef);
	},

	render: function() {
		return (
			<div>
				<main role="main">
					<section className="wrapper">
						<div className="flex-container">
							<form onSubmit={this.goToCookbook} >
								<div className="form__fieldset">
								    <label className="form__label">Enter Your Name</label>
								    <input type="text" className="form__input" ref="yourName" defaultValue={h.getFunName()} />
								</div>

								<button className="button button--dark">Login</button>
							</form>
						</div>
					</section>
				</main>
			</div>
		)
	}
})

/*
CreateRecipeForm
<CreateRecipeForm/>
 */
var CreateRecipeForm = React.createClass({
	createRecipe: function(e) {
		e.preventDefault();

		// create object out of form data
		var recipe = {
			name: this.refs.recipeName.value,
			creator: this.refs.recipeCreator.value
		};

		// add recipe to app state
		this.props.addRecipe(recipe);
	},

	render: function() {
		return (
			<div>
				<form onSubmit={this.createRecipe} >
					<h2>Enter a recipe, !</h2>

					<div className="form__fieldset">
					    <label className="form__label">Recipe name</label>
					    <input type="text" className="form__input" ref="recipeName" />
					</div>

					<div className="form__fieldset">
					    <label className="form__label">Recipe creator</label>
					    <input type="text" className="form__input" ref="recipeCreator" />
					</div>

					<button className="button button--dark">Save Recipe</button>
				</form>

				<button  className="" onClick={this.props.loadSampleRecipes}>Add Sample Recipes</button>
			</div>
		)
	}
});

/*
RenderedRecipe
<RenderedRecipe/>
 */
var RenderedRecipe = React.createClass({
	render: function() {
		return (
			<ul className="list-of-recipes">
				{Object.keys(this.state.recipes).map(this.renderRecipe)}
			</ul>
		)
	}
});

/*
NotFound
<NotFound/>
 */
var NotFound = React.createClass({
	render: function() {
		return <h1>Whoops, nothing here!</h1>
	}
});

/*
Routes
 */
var routes = (
	<Router history={createBrowserHistory()} >
		<Route path="/" component={Login} />
		<Route path="/cookbook/:yourName" component={App} />
		<Route path="*" component={NotFound} />
	</Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
