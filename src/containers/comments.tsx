import { h, Fragment, FunctionComponent } from 'preact';
import { useStore } from '@nanostores/preact';
import { comments as CommentsStore } from '../store/comments';
import { CommentType } from './../components/comment/comment';
import Comment from './../components/comment/comment';
// import Reply from './reply';

const Comments: FunctionComponent = (): JSX.Element => {
  const comments = useStore(CommentsStore);

  return (
    <Fragment>
      {comments &&
        comments.map((comment: CommentType, index: number) => {
          const HasReplies = comment.replies.length ? true : false;
          return (
            <div className="bg-white py-25px px-35px my-25px" key={index}>
              <Comment {...comment} />
              {HasReplies && (
                <div className="mt-25px">
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
