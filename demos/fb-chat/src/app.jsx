import CommentBox from './components/CommentBox';

const pollInterval = 2000;

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={pollInterval} />,
  document.getElementById('container')
);
