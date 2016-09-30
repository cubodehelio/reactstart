/**
 * <Counter/>
 */
const Counter = (props) => <div style={props.style}>{props.count}</div>;

Counter.propTypes = {
  count: React.PropTypes.number.isRequired,
  style: React.PropTypes.object
};

module.exports = Counter;
