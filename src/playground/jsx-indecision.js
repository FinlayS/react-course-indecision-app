console.log('App server is up and running!');

// JSX - Javascrip XML

const app = {
    title: "This is the Bloody Title!",
    subtitle: "Yes, swearing is cleversos",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = [];
        renderOptions()
    }
};

const removeOptions = () => {
    app.options = [];
    renderOptions()
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>RemoveAll</button>
            <ol>
                {
                    app.options.map((option) =>
                        <li key={option}>{option}</li>
                    )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
};

const appRoot = document.getElementById('app');
renderOptions();
