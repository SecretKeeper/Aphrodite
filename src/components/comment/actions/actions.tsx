import { FunctionComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { CommentContext } from '../comment';
import Badges from './badges';
import LikeAction from './likeAction';
import MoreActions from './moreActions';
import RepliesAction from './repliesAction';

const Actions: FunctionComponent = (): JSX.Element => {
  const comment = useContext(CommentContext);

  return (
    <div className="flex items-center pt-6">
      <LikeAction />
      {!comment.referred_to && <RepliesAction />}
      {!comment.referred_to && <Badges />}
      <MoreActions />
    </div>
  );
};

export default Actions;
