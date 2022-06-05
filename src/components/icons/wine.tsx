import { FunctionComponent, h, JSX } from 'preact';

type Props = {
  width: number;
  height: number;
};

const Wine: FunctionComponent<Props> = ({ width, height }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="-45 0 511 511.99959">
      <path
        d="m375.511719 451.996094h-60c-8.292969 0-15-6.707032-15-15 0-8.289063 6.707031-15 15-15h60c8.277343 0 15-6.722656 15-15v-122.003906c0-8.277344-6.722657-15-15-15h-60c-8.292969 0-15-6.710938-15-15 0-8.292969 6.707031-15 15-15h60c24.816406 0 45.003906 20.183593 45.003906 45v122.003906c0 24.816406-20.1875 45-45.003906 45zm0 0"
        fill="#ff7816"
      />
      <path
        d="m315.511719 179.988281h-270.007813c-8.402344 0-15.003906 6.601563-15.003906 15v272.011719c0 24.898438 20.101562 45 45.003906 45h210.003906c24.902344 0 45.003907-20.101562 45.003907-45v-272.011719c0-8.398437-6.601563-15-15-15zm0 0"
        fill="#ffd400"
      />
      <path
        d="m330.511719 194.988281v272.011719c0 24.898438-20.101563 45-45.003907 45h-105v-332.011719h135.003907c8.398437 0 15 6.601563 15 15zm0 0"
        fill="#fdbf00"
      />
      <path
        d="m300.511719 89.988281c0-9.902343-1.5-19.804687-4.800781-29.402343-9.601563-28.203126-33.300782-50.402344-61.800782-57.601563-18.300781-4.800781-36.601562-3.601563-53.402344 2.097656-14.101562 5.101563-27.003906 13.804688-37.203124 25.5-40.203126-4.796875-73.804688 22.800781-81.304688 59.40625h-1.5c-33 0-60 26.996094-60 60 0 21.601563 9 37.800781 27.601562 49.5 10.800782 6.902344 23.101563 10.5 35.699219 10.5h41.703125c8.398438 0 15 6.601563 15 15.003907 0 24.898437 20.097656 45 45 45 5.398438 0 10.203125-.902344 15-2.703126 17.402344-6 30-22.800781 30-42.296874 0-8.402344 6.601563-15.003907 15-15.003907h75.003906c33 0 60.003907-27 60.003907-60 0-33.003906-27-60-60-60zm0 0"
        fill="#ececf1"
      />
      <path
        d="m360.511719 149.988281c0 33-27 60-60 60h-75.003907c-8.402343 0-15 6.601563-15 15.003907 0 19.496093-12.601562 36.296874-30 42.296874v-262.207031c16.800782-5.699219 35.101563-6.898437 53.402344-2.097656 28.5 7.199219 52.199219 29.398437 61.800782 57.601563 3.300781 9.597656 4.800781 19.5 4.800781 29.402343 33 0 60 26.996094 60 60zm0 0"
        fill="#d1d6f2"
      />
      <path
        d="m150.503906 134.988281c0 8.285157-6.714844 15-15 15s-15-6.714843-15-15c0-8.285156 6.714844-15 15-15s15 6.714844 15 15zm0 0"
        fill="#d1d6f2"
      />
      <path
        d="m240.507812 104.988281c0 8.28125-6.714843 15-15 15-8.285156 0-15-6.71875-15-15 0-8.285156 6.714844-15 15-15 8.285157 0 15 6.714844 15 15zm0 0"
        fill="#bbc4ea"
      />
      <path
        d="m105.503906 451.996094c-8.292968 0-15-6.707032-15-15v-152.003906c0-8.289063 6.707032-15 15-15 8.292969 0 15 6.710937 15 15v152.003906c0 8.292968-6.707031 15-15 15zm0 0"
        fill="#fdbf00"
      />
      <path
        d="m195.507812 284.992188v152.003906c0 8.402344-6.601562 15-15 15-8.402343 0-15-6.597656-15-15v-152.003906c0-8.402344 6.597657-15 15-15 8.398438 0 15 6.597656 15 15zm0 0"
        fill="#fdbf00"
      />
      <g fill="#ff9f00">
        <path d="m255.507812 451.996094c-8.289062 0-15-6.707032-15-15v-152.003906c0-8.289063 6.710938-15 15-15 8.292969 0 15 6.710937 15 15v152.003906c0 8.292968-6.707031 15-15 15zm0 0" />
        <path d="m195.507812 284.992188v152.003906c0 8.402344-6.601562 15-15 15v-182.003906c8.398438 0 15 6.597656 15 15zm0 0" />
      </g>
    </svg>
  );
};

export default Wine;
