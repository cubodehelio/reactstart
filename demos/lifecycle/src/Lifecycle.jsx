/**
 * Hello React
 *
 * $ babel Lifecycle.jsx --out-file Lifecycle.js
 */

class Lifecycle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Juanma'
    };
  }

  /**
   * Render is required
   */
  render() {
    return <div>
      Hello <span style={this.props.style}>{this.state.name}</span>!
    </div>;
  }

  // Invoked once before the initial rendering occurs.
  componentWillMount() {
    console.info('componentWillMount');
  }

  // Invoked once AFTER the initial rendering occurs.
  componentDidMount() {
    console.info('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.info('componentWillReceiveProps nextProps:', nextProps);
  }

  shouldComponentUpdate() {
    console.info('shouldComponentUpdate');
  }

  componentWillUpdate() {
    console.info('componentWillUpdate');
  }

  // Use this as an opportunity to operate on the DOM when the component has
  // been updated
  componentDidUpdate() {
    console.info('componentDidUpdate');
  }

  // Invoked immediately before a component is unmounted from the DOM.
  componentWillUnmount() {
    console.info('componentWillUnmount');
  }


}

Lifecycle.propTypes = {
  style: React.PropTypes.object
};

Lifecycle.defaultProps = {
  style: {
    color: 'green'
  }
};

module.exports = Lifecycle;
