/**
 * Hello React
 *
 * $ babel HelloES2015.jsx --out-file HelloES2015.js
 */

class HelloES2015 extends React.Component {
  render() {
    return <div>
      Hello <span style={this.props.style}>{this.props.name}</span>!
    </div>;
  }
}

HelloES2015.propTypes = {
  name: React.PropTypes.string,
  style: React.PropTypes.object
};

module.exports = HelloES2015;