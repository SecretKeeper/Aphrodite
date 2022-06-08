import { FunctionComponent, h } from 'preact';
import { FlagSVG } from '../../icons';

const FavoriteBadge: FunctionComponent = (): JSX.Element => (
  <span className="align-middle pl-2">
    <FlagSVG width={17} height={17} />
  </span>
);

export default FavoriteBadge;
