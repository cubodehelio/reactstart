/**
 * ES5 React Component
 *
 * $ babel HelloES5.jsx --out-file HelloES5.js
 */

var HelloES5 = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    style: React.PropTypes.object
  },

  render: function render() {
    return <div>
      Hello <span style={this.props.style}>{this.props.name}</span>!
    </div>;
  }
});

module.exports = HelloES5;
