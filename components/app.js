/**
 * Created by buggy on 9/11/15.
 */
var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/header');

var APP = React.createClass({
    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
    },
    connect(){
        console.log('connected through socket.io ', this.socket.id);
    },
    render() {
        return (
            <div>
                <Header title="New Title From" />
            </div>
        );
    }
});

module.exports = APP;