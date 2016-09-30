/**
 * ES5 React Component
 *
 * $ babel HelloES5.jsx --out-file HelloES5.js
 */

var HelloES5 = React.createClass({
  displayName: 'HelloES5',


  propTypes: {
    name: React.PropTypes.string,
    style: React.PropTypes.object
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      'Hello ',
      React.createElement(
        'span',
        { style: this.props.style },
        this.props.name
      ),
      '!'
    );
  }
});

module.exports = HelloES5;
