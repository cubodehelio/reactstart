import Comment from './Comment';

const CommentList = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render() {

    const commentNodes = this.props.data.map((comment) =>
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    );

    return (
      <div className="commentList">
        { commentNodes }
      </div>
    );

  }
});

export default CommentList;
