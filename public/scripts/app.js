"use strict";

console.log('App server is up and running!');

// JSX - Javascrip XML

var app = {
    title: "This is the Bloody Title!",
    subtitle: "Yes, swearing is cleversos",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'There are no options'
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Option the first: "
        ),
        React.createElement(
            "li",
            null,
            "Option the next: "
        )
    )
);
// const user = {
//     name: 'Simpson',
//     age: 60,
//     location: 'Kitchens',
//
// }
//
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }


var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "reset"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
