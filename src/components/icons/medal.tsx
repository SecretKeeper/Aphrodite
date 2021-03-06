import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const MedalSVG: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 511 511.99959">
      <path
        style="fill:#F0C419;"
        d="M414.897,203.034c0-87.755-71.142-158.897-158.897-158.897S97.103,115.279,97.103,203.034
            S168.245,361.931,256,361.931S414.897,290.79,414.897,203.034"
      />
      <g>
        <path
          style="fill:#E64C3C;"
          d="M256,44.138c36.608,0,70.232,12.509,97.103,33.315V0H158.897v77.453
                C185.768,56.647,219.392,44.138,256,44.138"
        />
        <path
          style="fill:#E64C3C;"
          d="M256,361.931c-36.608,0-70.232-12.509-97.103-33.315V512L256,414.897L353.103,512V328.616
                C326.232,349.422,292.608,361.931,256,361.931"
        />
      </g>
      <polygon
        style="fill:#FFE69F;"
        points="256,88.276 289.827,156.478 361.931,167.724 310.731,220.822 326.621,291.31 256,260.582 
            185.379,291.31 201.269,220.822 150.069,167.724 222.173,156.478"
      />
    </svg>
  );
};

export default MedalSVG;
