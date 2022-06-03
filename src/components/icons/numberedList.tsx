import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const NumberedListSVG: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      x="0px"
      y="0px"
      viewBox="0 0 405.333 405.333"
      style="enable-background:new 0 0 405.333 405.333"
      xmlSpace="preserve"
      fill="currentColor"
    >
      <polygon
        points="0,309.333 42.667,309.333 42.667,320 21.333,320 21.333,341.333 42.667,341.333 42.667,352 0,352 0,373.333 
				64,373.333 64,288 0,288"
      />
      <polygon points="21.333,117.333 42.667,117.333 42.667,32 0,32 0,53.333 21.333,53.333" />
      <polygon points="0,181.333 38.4,181.333 0,226.133 0,245.333 64,245.333 64,224 25.6,224 64,179.2 64,160 0,160" />
      <rect x="106.667" y="309.333" width="298.667" height="42.667" />
      <rect x="106.667" y="53.333" width="298.667" height="42.667" />
      <rect x="106.667" y="181.333" width="298.667" height="42.667" />
    </svg>
  );
};

export default NumberedListSVG;
