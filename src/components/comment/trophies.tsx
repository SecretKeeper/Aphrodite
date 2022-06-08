import { FunctionComponent, h } from 'preact';
import { BeerSVG, CrownSVG, MedalSVG, TargetSVG, WineSVG } from '../icons';

export interface Trophy {
  type: number;
  count: number;
}

type Props = {
  trophies: Trophy[];
};

const Trophies: FunctionComponent<Props> = (props): JSX.Element => {
  const trophiesDic: { [key: number]: JSX.Element } = {
    1: <BeerSVG width={28} height={28} />,
    2: <WineSVG width={28} height={28} />,
    3: <MedalSVG width={28} height={28} />,
    4: <TargetSVG width={28} height={28} />,
    5: <CrownSVG width={28} height={28} />,
  };

  return (
    <div className="flex ml-auto">
      {props.trophies.map((trophy: Trophy, index: number) => {
        return (
          <span className="relative mr-4" key={index}>
            {trophiesDic[trophy.type]}
            <span className="absolute flex justify-center items-center bottom-7 left-4 w-4 h-4 font-semibold text-center text-xs leading-3 bg-[#323232] text-white rounded-full">
              {trophy.count}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Trophies;
