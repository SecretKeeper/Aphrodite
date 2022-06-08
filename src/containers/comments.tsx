import { h, Fragment, FunctionComponent } from 'preact';
import { useStore } from '@nanostores/preact';
import { comments as CommentsStore } from '../store/comments';
import { CommentType } from './../components/comment/comment';
import Comment from './../components/comment/comment';

const Comments: FunctionComponent = (): JSX.Element => {
  const comments = useStore(CommentsStore);

  return (
    <Fragment>
      {comments &&
        comments.map((comment: CommentType, index: number) => {
          const HasReplies = comment.replies.length ? true : false;
          return (
            <div className="bg-white py-6 px-9 my-6" key={index}>
              <Comment {...comment} />
              {HasReplies && (
                <div className="mt-6">
                  {comment.replies.map((reply) => (
                    // <Reply data={reply} key={index} />
                    <div key={index}>i am reply</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
    </Fragment>
  );
};

export default Comments;
