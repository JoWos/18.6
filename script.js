var Counter = React.createClass({
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

    render: function() {
        return React.createElement('div', {className: 'wrapper'}, 
                React.createElement('div', {className: 'counter'}, this.state.counter),
                React.createElement('button', {onClick: this.decrement}, '-'),
                React.createElement('button', {onClick: this.increment}, '+'),
        );
    }
});



var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

var el = React.createElement(Counter);
ReactDOM.render(el, document.getElementById('app2'));
