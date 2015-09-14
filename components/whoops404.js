/**
 * Created by buggy on 9/14/15.
 */
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Whoops404 = React.createClass({
    render() {
        return (
            <div id="not-found">
                <h1>Whoops....</h1>
                <p> We cannot find the page that you were looking for...</p>
                <Link to="/">Join as Audience </Link>
                <Link to="/speaker">Start the discussion</Link>
                <Link to="/board">View the board </Link>
            </div>
        );
    }
});

module.exports = Whoops404;