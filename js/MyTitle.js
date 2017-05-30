import React from 'react';

var MyTitle = React.createClass({
    render: function () {
        return (


            React.DOM.div({ style: {color: this.props.color} }, React.DOM.h1(null, this.props.title))
        )
    }
});

export default MyTitle;