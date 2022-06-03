import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const UnderlineSVG: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 384 384"
      fill="currentColor"
      stroke="currentColor"
    >
      <path
        d="M192,298.667c70.72,0,128-57.28,128-128V0h-53.333v170.667c0,41.28-33.387,74.667-74.667,74.667
				s-74.667-33.387-74.667-74.667V0H64v170.667C64,241.387,121.28,298.667,192,298.667z"
      />
      <rect x="42.667" y="341.333" width="298.667" height="42.667" />
    </svg>
  );
};

export default UnderlineSVG;
