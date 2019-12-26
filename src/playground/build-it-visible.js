const app = {
    title: "Visibility Toggle",
    divText: 'Here you can see the text',
    toggleVisibility: false
};

const doCode = () => {
    app.toggleVisibility = !app.toggleVisibility
    renderToggle()
};

const renderToggle = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={doCode}>{app.toggleVisibility ? 'Hide' : 'Show'}</button>
            {app.toggleVisibility && (<p>{app.divText}</p>)}
        </div>
    );
    ReactDOM.render(template, appRoot)
};

const appRoot = document.getElementById('app');
renderToggle(); 