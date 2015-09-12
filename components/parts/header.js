/**
 * Created by buggy on 9/12/15.
 */
var React = require('react');

var Header = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
});

module.exports = Header;