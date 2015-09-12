/**
 * Created by buggy on 9/11/15.
 */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var APP = require('./components/app');
var Audience = require('./components/audience');
var Board = require('./components/board');
var Speaker = require('./components/speaker');

var routes = (
    <Route handler={APP}>
        <DefaultRoute handler={Audience}/>
        <Route name="speaker" handler={Speaker}/>
        <Route name="board" handler={Board}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.querySelector('#react-container'));
});

