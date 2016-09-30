/**
 * Using the Hello component
 */
const Hello = require('../index.jsx');
const markup = <Hello name="Juanma" style={{color: 'red'}}/>;

ReactDOM.render(markup, document.getElementById('container'));
