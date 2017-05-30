import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';


var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
    render: function () {
        return (
            React.DOM.div(null,
                [
                    MyTitleFactory({title: 'this some title', color: 'peru'}),
                    MyTitleFactory({title: 'this is another title', color: 'aquamarine'}),
                    MyTitleFactory({title: 'jana ist doof', color: 'yellow'}),
                    MyTitleFactory({title: 'react is awesome', color: 'darkvioletred'})
                ]
            )
        )
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));