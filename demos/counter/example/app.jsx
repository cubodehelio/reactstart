/**
 * Using the Hello component
 */
const Counter = require('../index.jsx');

const style = {
  fontSize: '8em',
};

let count = 0;

const render = () => {
  ReactDOM.render(
    <Counter count={count} style={style}/>,
    document.getElementById('container'));
};

setInterval(() => {
  count++;
  render();
}, 1000);

/**
 * render the component for the first timne
 */
render();
