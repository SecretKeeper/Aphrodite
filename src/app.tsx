import { h, Fragment } from 'preact';
import Editor from './components/editor/editor';
import Comments from './containers/comments';

export function App() {
  return (
    <>
      <Editor />
      <Comments />
    </>
  );
}
