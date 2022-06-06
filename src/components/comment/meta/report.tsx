import { FunctionComponent, h } from 'preact';

const FavoriteBadge: FunctionComponent = (): JSX.Element => (
  <span className="align-middle pl-8px">
    <svg
      className="transition-all duration-150"
      fill="none"
      stroke="#d75a4a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={17}
      height={17}
      viewBox="0, -2, 25, 25"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  </span>
);

export default FavoriteBadge;
