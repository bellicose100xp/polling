/**
 * Created by HSO on 9/12/15.
 */
var React = require('react');
var Display = require('./parts/display');
var Join = require('./parts/join');

var Audience = React.createClass({
    render() {
        return (
            <Display if={this.props.status === 'connected'}>
                <h1> Join the Meeting </h1>
                <Join />
            </Display>
        );
    }
});

module.exports = Audience;