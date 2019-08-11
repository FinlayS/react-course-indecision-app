console.log('App server is up and running!')

// JSX - Javascrip XML

const app = {
    title: "This is the Bloody Title!",
    subtitle: "Yes, swearing is cleversos",
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


let count = 0
const addOne = () => {
    console.log('addOne')
}
const minusOne = () => {
    console.log('minusOne')
}
const reset = () => {
    console.log('reset')
}

const templateTwo = (
<div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
