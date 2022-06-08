import { FunctionComponent, h } from 'preact';

const FavoriteBadge: FunctionComponent = (): JSX.Element => (
  <span className="align-middle pl-2">
    <svg
      className="transition-all duration-150"
      fill="#ebc300"
      stroke="#ebc300"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={18}
      height={18}
      viewBox="0, -2, 25, 25"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  </span>
);

export default FavoriteBadge;
