import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const BoldSVG: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 97 97"
      fill="currentColor"
      stroke="currentColor"
    >
      <path
        d="M71.865,46.842L71.865,46.842c8.133-3.628,12.611-10.272,12.611-18.709C84.477,9.991,73.076,0,52.378,0H11.623
			c-1.104,0-2,0.896-2,2v93.01c0,1.104,0.896,2,2,2h40.756c23.557,0,35.008-9.339,35.008-28.549
			C87.387,62.952,83.593,50.419,71.865,46.842z M52.379,79.963h-24.74V55.02h24.74c8.171,0,16.854,4.435,16.854,12.652
			C69.234,76.162,60.77,79.963,52.379,79.963z M52.379,38.943h-24.74V16.631h24.74c12.938,0,13.941,9.122,13.941,11.918
			C66.32,33.389,64.736,38.943,52.379,38.943z"
      />
    </svg>
  );
};

export default BoldSVG;
