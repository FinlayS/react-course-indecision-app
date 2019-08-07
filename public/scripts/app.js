"use strict";

console.log('App server is up and running!');

// JSX - Javascrip XML

var appObj = {
    title: "This is the Bloody Title!",
    subtitle: "Yes, swearing is clever",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appObj.title
    ),
    appObj.subtitle && React.createElement(
        "p",
        null,
        appObj.subtitle
    ),
    React.createElement(
        "p",
        null,
        appObj.options.length > 0 ? 'Here are your options' : 'There are no options'
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
var user = {
    name: 'Simpson',
    age: 60,
    location: 'Kitchens'

};
var userName = "Mike";
var userAge = 27;
var userLocation = "Kitchens";

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymousey'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, app);
