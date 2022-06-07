import { FunctionComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { FlagSVG, StarSVG, TrashSVG, UserXSVG } from '../../icons';

type Props = {
  show: boolean;
  handler: (value: boolean) => void;
};

const ActionsPopover: FunctionComponent<Props> = (props) => {
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

  const actions = [
    {
      name: 'favorite',
      icon: <StarSVG width={20} height={20} />,
    },
    {
      name: 'delete',
      icon: <TrashSVG width={20} height={20} />,
    },
    {
      name: 'block',
      icon: <UserXSVG width={20} height={20} />,
    },
    {
      name: 'report',
      icon: <FlagSVG width={20} height={20} />,
    },
  ];

  return (
    <div
      ref={(ref) => ref && setNode(ref)}
      size={150}
      className={`absolute flex justify-around dark--popover--wrapper dark--more-actions-popover--wrapper ${
        props.show && 'show-popover'
      }`}
    >
      <div class="flex flex-col w-full">
        {actions.map((action, index) => {
          return (
            <div className={`flex w-full group px-[10px] py-3 text-[#ccc] more-action-icon ${action.name}`} key={index}>
              <div className="flex-grow text-inherit text-[13px] text-left font-semibold capitalize group-hover:text-[#fff]">
                {action.name}
              </div>
              {action.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActionsPopover;
