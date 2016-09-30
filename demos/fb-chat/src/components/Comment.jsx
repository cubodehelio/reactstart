const Comment = React.createClass({

  propTypes: {
    author: React.PropTypes.string,
    children: React.PropTypes.string
  },

  render() {

    return (
      <div className="comment">
        <h2 className="commentAuthor">{ this.props.author }</h2>
        <span dangerouslySetInnerHTML={ this.getRawMarkup() }/>
      </div>
    );

  },

  getRawMarkup() {

    const md = new Remarkable();

    return {
      '__html': md.render(this.props.children.toString())
    };

  }
});

export default Comment;
