import { h, FunctionComponent, createContext } from 'preact';
import { StateUpdater, useState } from 'preact/hooks';
import Actions from './actions/actions';
import Meta from './meta/meta';
import { Trophy } from './trophies';

export const CommentContext = createContext<CommentType & CommentActions>({
  id: 0,
  username: '',
  like_count: 0,
  content: '',
  replies: [],
  trophies: [],
  referred_to: null,
  created_at: '',
  showReplyForm: false,
  toggleReplyForm: () => '',
});

export interface CommentType {
  id: number;
  username: string;
  content: string;
  like_count: number;
  trophies: Trophy[];
  replies: CommentType[];
  referred_to: number | null;
  created_at: string;
}

type CommentActions = {
  showReplyForm: boolean;
  toggleReplyForm: StateUpdater<boolean>;
};

const Comment: FunctionComponent<CommentType> = (props): JSX.Element => {
  const [showReplyForm, toggleReplyForm] = useState(false);
  return (
    <CommentContext.Provider value={{ ...props, showReplyForm, toggleReplyForm }}>
      <Meta {...props} />
      <p className="text-left text-sm italic leading-5 m-0 pt-5">{props.content}</p>
      <Actions />
      {/* {showReplyForm && <ReplyForm commentID={props.id} />} */}
    </CommentContext.Provider>
  );
};

export default Comment;
