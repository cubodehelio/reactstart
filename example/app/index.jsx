import CommentBox from './components/CommentBox';

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={5000} />,
  document.getElementById('container')
);
