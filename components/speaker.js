/**
 * Created by HSO on 9/12/15.
 */
var React = require('react');

var Speaker = React.createClass({
    render() {
        return (
            <h1>Speaker: {this.props.status}</h1>
        );
    }
});

module.exports = Speaker;