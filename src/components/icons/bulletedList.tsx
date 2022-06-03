import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const BulletedListSVG: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 394.667 394.667"
      style="enable-background:new 0 0 394.667 394.667"
      xmlSpace="preserve"
      fill="currentColor"
    >
      <path d="M32,37.333c-17.707,0-32,14.293-32,32s14.293,32,32,32s32-14.293,32-32S49.707,37.333,32,37.333z" />
      <path d="M32,165.333c-17.707,0-32,14.293-32,32s14.293,32,32,32s32-14.293,32-32S49.707,165.333,32,165.333z" />
      <path d="M32,293.333c-17.813,0-32,14.4-32,32c0,17.6,14.4,32,32,32c17.6,0,32-14.4,32-32C64,307.733,49.813,293.333,32,293.333z" />
      <rect x="96" y="304" width="298.667" height="42.667" />
      <rect x="96" y="48" width="298.667" height="42.667" />
      <rect x="96" y="176" width="298.667" height="42.667" />
    </svg>
  );
};

export default BulletedListSVG;
