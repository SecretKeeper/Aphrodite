import { FunctionComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { BeerSVG, CrownSVG, MedalSVG, TargetSVG, WineSVG } from '../../icons';

type Props = {
  show: boolean;
  handler: (value: boolean) => void;
};

const BadgesPopover: FunctionComponent<Props> = (props): JSX.Element => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const handleClose = (e: any) => {
    if (node && !node.contains(e.target)) {
      props.handler(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClose, true);
    return () => {
      document.removeEventListener('click', handleClose, true);
    };
  }, [node]);

  const trophies = [
    <BeerSVG width={28} height={28} key={0} />,
    <WineSVG width={28} height={28} key={1} />,
    <MedalSVG width={28} height={28} key={2} />,
    <TargetSVG width={28} height={28} key={3} />,
    <CrownSVG width={28} height={28} key={4} />,
  ];

  return (
    <div
      className={`absolute flex top-11 left-[138px] w-[275px] justify-around dark--popover--wrapper  ${
        props.show && 'show-popover'
      }`}
      ref={(ref) => ref && setNode(ref)}
    >
      {trophies.map((_, index) => trophies[index])}
    </div>
  );
};

export default BadgesPopover;
