/**
 * Hello React
 */

const Hello = (props) => <div>
  Hello <span style={props.style}>{props.name}</span>!
</div>;

Hello.propTypes = {
  name: React.PropTypes.string,
  style: React.PropTypes.object
};

module.exports = Hello;
