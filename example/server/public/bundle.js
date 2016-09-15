/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _CommentBox = __webpack_require__(1);
	
	var _CommentBox2 = _interopRequireDefault(_CommentBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pollInterval = 2000;
	
	ReactDOM.render(React.createElement(_CommentBox2.default, { url: '/api/comments', pollInterval: pollInterval }), document.getElementById('container'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _CommentForm = __webpack_require__(2);
	
	var _CommentForm2 = _interopRequireDefault(_CommentForm);
	
	var _CommentList = __webpack_require__(3);
	
	var _CommentList2 = _interopRequireDefault(_CommentList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentBox = React.createClass({
	  displayName: 'CommentBox',
	
	  propTypes: {
	    url: React.PropTypes.string.isRequired,
	    pollInterval: React.PropTypes.number.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      pollInterval: 5000
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },
	  render: function render() {
	    console.log('render()');
	
	    return React.createElement(
	      'div',
	      { className: 'commentBox' },
	      React.createElement(
	        'h1',
	        null,
	        'Comments'
	      ),
	      React.createElement(_CommentList2.default, { data: this.state.data }),
	      React.createElement(_CommentForm2.default, { onCommentSubmit: this.handleCommentSubmit })
	    );
	  },
	  componentDidMount: function componentDidMount() {
	
	    console.log('componentDidMount');
	    this.loadCommentsFromServer();
	    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	  },
	  loadCommentsFromServer: function loadCommentsFromServer() {
	    var _this = this;
	
	    console.log('pooling from', this.props.url);
	
	    superagent.get(this.props.url).set('X-Requested-With', 'XMLHttpRequest').set('Expires', '-1').set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1,private').end(function (err, res) {
	
	      if (err || !res.ok) {
	
	        console.error(_this.props.url, res.statusCode, err.toString());
	      } else {
	
	        _this.setState({ data: res.body });
	      }
	    });
	  },
	  handleCommentSubmit: function handleCommentSubmit(comment) {
	    var _this2 = this;
	
	    var comments = this.state.data;
	
	    // Optimistically set an id on the new comment.
	    comment.id = Date.now();
	
	    var newComments = comments.concat([comment]);
	
	    this.setState({ data: newComments });
	
	    superagent.post(this.props.url).set('X-Requested-With', 'XMLHttpRequest').send(comment).end(function (err, res) {
	
	      if (err || !res.ok) {
	
	        _this2.setState({ data: comments });
	        console.error(_this2.props.url, res.statusCode, err.toString());
	      } else {
	
	        _this2.setState({ data: res.body });
	      }
	    });
	  }
	});
	
	exports.default = CommentBox;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CommentForm = React.createClass({
	  displayName: 'CommentForm',
	
	
	  propTypes: {
	    onCommentSubmit: React.PropTypes.func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	
	    return {
	      onCommentSubmit: function onCommentSubmit(comment) {
	
	        console.info('submit fired', comment);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	
	    return {
	      author: '',
	      text: ''
	    };
	  },
	  render: function render() {
	
	    return React.createElement(
	      'form',
	      { className: 'commentForm', onSubmit: this.handleSubmit },
	      React.createElement('input', { type: 'text', placeholder: 'Your name', value: this.state.author,
	        onChange: this.handleAuthorChange }),
	      React.createElement('input', { type: 'text', placeholder: 'Say something..', value: this.state.text,
	        onChange: this.handleTextChange }),
	      React.createElement('input', { type: 'submit', value: 'Post' })
	    );
	  },
	  handleAuthorChange: function handleAuthorChange(event) {
	
	    this.setState({ author: event.target.value });
	  },
	  handleTextChange: function handleTextChange(event) {
	
	    var text = event.target.value;
	
	    this.setState({ text: text });
	  },
	  handleSubmit: function handleSubmit(event) {
	
	    event.preventDefault();
	
	    var author = this.state.author.trim(),
	        text = this.state.text.trim();
	
	    if (!text || !author) {
	
	      return;
	    }
	
	    this.props.onCommentSubmit({
	      author: author,
	      text: text
	    });
	
	    this.setState({
	      author: '',
	      text: ''
	    });
	  }
	});
	
	exports.default = CommentForm;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Comment = __webpack_require__(4);
	
	var _Comment2 = _interopRequireDefault(_Comment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentList = React.createClass({
	  displayName: "CommentList",
	
	
	  propTypes: {
	    data: React.PropTypes.array.isRequired
	  },
	
	  render: function render() {
	
	    var commentNodes = this.props.data.map(function (comment) {
	      return React.createElement(
	        _Comment2.default,
	        { author: comment.author, key: comment.id },
	        comment.text
	      );
	    });
	
	    return React.createElement(
	      "div",
	      { className: "commentList" },
	      commentNodes
	    );
	  }
	});
	
	exports.default = CommentList;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Comment = React.createClass({
	  displayName: "Comment",
	
	
	  propTypes: {
	    author: React.PropTypes.string,
	    children: React.PropTypes.string
	  },
	
	  render: function render() {
	
	    return React.createElement(
	      "div",
	      { className: "comment" },
	      React.createElement(
	        "h2",
	        { className: "commentAuthor" },
	        this.props.author
	      ),
	      React.createElement("span", { dangerouslySetInnerHTML: this.getRawMarkup() })
	    );
	  },
	  getRawMarkup: function getRawMarkup() {
	
	    var md = new Remarkable();
	
	    return {
	      '__html': md.render(this.props.children.toString())
	    };
	  }
	});
	
	exports.default = Comment;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map