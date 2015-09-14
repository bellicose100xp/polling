/**
 * Created by buggy on 9/14/15.
 */
"use strict";

var React = require('react');

var Join = React.createClass({
    join(event){
        event.preventDefault();
        var memberName = React.findDOMNode(this.refs.name).value;
        console.log("Join Member", memberName);

    },
    render() {
        return (
            <form onSubmit={this.join}>

                <label>Full Name</label>
                <input className="form-control"
                       placeholder="enter your full name"
                       ref="name"
                       required/>

                <button type="submit" className="btn btn-primary"> Join</button>

            </form>
        );
    }
});

module.exports = Join;