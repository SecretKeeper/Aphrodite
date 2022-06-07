import { FunctionComponent, h } from 'preact';
import Author from './author';
import Trophies from './../trophies';
import { CommentType } from '../comment';
import Favorite from './favorite';
import Report from './report';

const Meta: FunctionComponent<CommentType> = (props): JSX.Element => {
  return (
    <div className="flex">
      <div className="flex m-0">
        <Author username={props.username} date={props.created_at} />
        <Favorite />
        <Report />
      </div>
      <Trophies trophies={props.trophies} />
    </div>
  );
};

export default Meta;
