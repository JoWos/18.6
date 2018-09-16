var Counter = React.createClass({

    getDefaultProps() {
        console.log('getDefaultProps - ustawiamy domyślne wartości propsów');
    },


    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },


    componentWillMount() {
        console.log('componentWillMount - metoda wywoływana przed renderowaniem');
    },

    render: function() {
        return React.createElement('div', {className: 'wrapper'}, 
                React.createElement('div', {className: 'counter'}, this.state.counter),
                React.createElement('button', {onClick: this.decrement}, '-'),
                React.createElement('button', {onClick: this.increment}, '+'),
        );
    },

    componentDidMount() {
        console.log('componentDidMount - możemy zacząć aktualizację komponentu, zmieniamy właściwości np. za pomocą jQuery');
    },

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps - komponent otrzymał nowe właściwości');
    },

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate - jeśli zwróci true, to znaczy, że komponent ma się zmienić po otrzymaniu nowych właściwości - służy do optymalizacji');
        return true;
    },

    componentWillUpdate() {
        console.log('componentWillUpdate - wywoływana przed ponownym renderowaniem, o ile poprzednia metoda zwróci true');
    },

    componentWillUnmount() {
        console.log('componentWillUnmount - sporzątamy po komponencie, np. odpinamy nasłuchiwanie zdarzeń');
    }

});



var element = React.createElement('div', {}, 
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));