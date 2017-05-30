import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var MyFirstComponent = React.createClass({
    render: function () {
        return (
            <div>
                <MyTitle title="This is some title" color="red"/>
                <MyTitle title="This is another title" color="green"/>
                <MyTitle title="This is yet another title" color="blue"/>
                <MyTitle title="This is one sexy title" color="brown"/>
                <MyTitle title="This is a purple title" color="purple"/>
            </div>
        )
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));