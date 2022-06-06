import { FunctionComponent, h } from 'preact';
import Timeago from 'react-timeago';

type Props = {
  username: string;
  date: string;
};

const Author: FunctionComponent<Props> = (props): JSX.Element => {
  //   const { state, dispatch } = useContext(Store);
  return (
    <div
      className="flex cursor-pointer"
      // onClick={() => dispatch({ type: 'OPEN_MODAL' })}
    >
      <img
        className="w-50px h-50px align-top rounded-full mr-15px"
        src="https://img.wallpapersafari.com/tablet/768/1024/80/83/pIb5kC.jpg"
        alt={props.username}
      />
      <div className="flex flex-col items-start">
        <h3 className="font-semibold inline-block text-sm text-hex-707070">{props.username}</h3>
        <Timeago className="text-xs text-hex-b4b4b4 italic font-semibold" date={props.date} />
      </div>
    </div>
  );
};

export default Author;
