const CommentForm = React.createClass({

  propTypes: {
    onCommentSubmit: React.PropTypes.func.isRequired
  },

  getDefaultProps() {

    return {
      onCommentSubmit: (comment) => {

        console.info('submit fired', comment);

      }
    };

  },

  getInitialState() {

    return {
      author: '',
      text: ''
    };

  },
  render() {

    return (
      <form className="commentForm" onSubmit={this.handleSubmit} >
        <input type="text" placeholder="Your name" value={this.state.author}
          onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Say something.." value={this.state.text}
          onChange={this.handleTextChange} />
        <input type="submit" value="Post"/>
      </form>
    );

  },
  handleAuthorChange(event) {

    this.setState({ author: event.target.value });

  },

  handleTextChange(event) {

    const text = event.target.value;

    this.setState({ text });

  },

  handleSubmit(event) {

    event.preventDefault();

    const author = this.state.author.trim(),
      text = this.state.text.trim();

    if (!text || !author) {

      return;

    }

    this.props.onCommentSubmit({
      author,
      text
    });

    this.setState({
      author: '',
      text: ''
    });

  }

});

export default CommentForm;
