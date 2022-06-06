import { FunctionComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { CommentContext } from '../comment';
import LikeAction from './likeAction';
import RepliesAction from './repliesAction';

const Actions: FunctionComponent = (): JSX.Element => {
  const comment = useContext(CommentContext);

  return (
    <div className="flex pt-25px">
      <LikeAction />
      {!comment.referred_to && <RepliesAction />}
      {/*{!props.reply && <Badges />} */}
      {/* <MoreActions />  */}
    </div>
  );
};

export default Actions;
