import { FunctionComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { CommentContext } from '../comment';

const RepliesAction: FunctionComponent = (): JSX.Element => {
  const comment = useContext(CommentContext);

  return (
    <div className="flex hover:cursor-pointer mr-6" onClick={() => comment.toggleReplyForm(!comment.showReplyForm)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      <span className="text-sm font-semibold text-[#323232] pl-2">{comment.replies.length}</span>
    </div>
  );
};

export default RepliesAction;
