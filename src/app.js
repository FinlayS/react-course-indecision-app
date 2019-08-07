console.log('App server is up and running!')

// JSX - Javascrip XML

var appObj = {
    title: "This is the Bloody Title!",
    subtitle: "Yes, swearing is clever",
    options: ['One', 'Two']
};


var template = (
    <div>
        <h1>{appObj.title}</h1>
        {appObj.subtitle && <p>{appObj.subtitle}</p>}
        <p>{appObj.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
        <ol>
            <li>Option the first: </li>
            <li>Option the next: </li>
        </ol>
    </div>
);
var user = {
    name: 'Simpson',
    age: 60,
    location: 'Kitchens',
    
}
var userName = "Mike";
var userAge = 27;
var userLocation = "Kitchens";

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymousey'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, app);
