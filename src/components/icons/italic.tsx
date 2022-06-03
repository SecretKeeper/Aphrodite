import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const ItalicSVG: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 298 298"
      fill="currentColor"
      stroke="currentColor"
    >
      <polygon
        points="106.667,0 106.667,64 153.92,64 80.747,234.667 21.333,234.667 21.333,298.667 192,298.667 192,234.667 
			144.747,234.667 217.92,64 277.333,64 277.333,0"
      />
    </svg>
  );
};

export default ItalicSVG;
