import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const CodeSVG: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 25 25"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline fill="none" stroke="currentColor" points="16 18 22 12 16 6"></polyline>
      <polyline fill="none" stroke="currentColor" points="8 6 2 12 8 18"></polyline>
    </svg>
  );
};

export default CodeSVG;
