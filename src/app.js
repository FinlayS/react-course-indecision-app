console.log('App server is up and running!')

// JSX - Javascrip XML

const app = {
    title: "This is the Bloody Title!",
    subtitle: "Yes, swearing is cleverss",
    options: ['One', 'Two']
};


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
        <ol>
            <li>Option the first: </li>
            <li>Option the next: </li>
        </ol>
    </div>
);
const user = {
    name: 'Simpson',
    age: 60,
    location: 'Kitchens',
    
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymousey'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
