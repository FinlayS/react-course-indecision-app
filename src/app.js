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

let count = 0
const addOne = () => {
    count ++
    renderCounterApp()
}
const minusOne = () => {
    count --
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}

const appRoot = document.getElementById('app');

let renderCounterApp;
renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
