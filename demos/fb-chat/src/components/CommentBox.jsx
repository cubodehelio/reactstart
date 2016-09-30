import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentBox = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
    pollInterval: React.PropTypes.number.isRequired
  },

  getDefaultProps() {
    return {
      pollInterval: 5000
    };
  },

  getInitialState() {
    return {
      data: []
    };
  },

  render() {
    console.log('render()');

    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );

  },

  componentDidMount() {

    console.log('componentDidMount');
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);

  },

  loadCommentsFromServer() {

    console.log('pooling from', this.props.url);

    superagent.get(this.props.url).
      set('X-Requested-With', 'XMLHttpRequest').
      set('Expires', '-1').
      set('Cache-Control',
      'no-cache,no-store,must-revalidate,max-age=-1,private').
      end((err, res) => {

        if (err || !res.ok) {

          console.error(this.props.url, res.statusCode, err.toString());

        } else {

          this.setState({ data: res.body });

        }

      });

  },

  handleCommentSubmit(comment) {

    const comments = this.state.data;

    // Optimistically set an id on the new comment.
    comment.id = Date.now();

    const newComments = comments.concat([comment]);

    this.setState({ data: newComments });

    superagent.post(this.props.url).
      set('X-Requested-With', 'XMLHttpRequest').
      send(comment).
      end((err, res) => {

        if (err || !res.ok) {

          this.setState({ data: comments });
          console.error(this.props.url, res.statusCode, err.toString());

        } else {

          this.setState({ data: res.body });

        }

      });

  }

});

export default CommentBox;
