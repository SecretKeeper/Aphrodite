import { FunctionComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import ActionsPopover from './actionsPopover';
// import ActionsPopOver from './moreActionPopOver';

const MoreActions: FunctionComponent = (): JSX.Element => {
  const [showBox, toggleBox] = useState<boolean>(false);

  return (
    <div className="relative ml-auto">
      <div
        className="relative ml-atuo hover:cursor-pointer"
        onClick={() => {
          toggleBox(!showBox);
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <g>
            <g data-name="more-horizotnal">
              <rect width="24" height="24" opacity="0" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="12" r="2" />
            </g>
          </g>
        </svg>
      </div>
      <ActionsPopover show={showBox} handler={(value: boolean) => toggleBox(value)} />
    </div>
  );
};

export default MoreActions;
