import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const StarSVG: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      fill="none"
      stroke="#ebc300"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0, -2, 25, 25"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default StarSVG;
