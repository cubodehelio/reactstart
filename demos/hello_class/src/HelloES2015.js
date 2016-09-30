"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Hello React
 *
 * $ babel HelloES2015.jsx --out-file HelloES2015.js
 */

var HelloES2015 = function (_React$Component) {
  _inherits(HelloES2015, _React$Component);

  function HelloES2015() {
    _classCallCheck(this, HelloES2015);

    return _possibleConstructorReturn(this, (HelloES2015.__proto__ || Object.getPrototypeOf(HelloES2015)).apply(this, arguments));
  }

  _createClass(HelloES2015, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        React.createElement(
          "span",
          { style: this.props.style },
          this.props.name
        ),
        "!"
      );
    }
  }]);

  return HelloES2015;
}(React.Component);

HelloES2015.propTypes = {
  name: React.PropTypes.string,
  style: React.PropTypes.object
};

module.exports = HelloES2015;
