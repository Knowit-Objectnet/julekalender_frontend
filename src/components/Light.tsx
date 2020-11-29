import React, { FC } from "react";

type LightParams = {
  nr: Number;
  solved: boolean;
}

const Light: FC<LightParams> = ({nr, solved}) => (
  <svg
    className={`w-28 float-right mr-8 mt-12 absolute right-0 top-0 fill-current ${solved ? 'text-lightbulb-green' : 'text-lightbulb-yellow'}`}
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    baseProfile="tiny"
    overflow="visible"
    version="1.2"
    viewBox="0 0 139.26 171.48"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill="#D9D4CB"
        d="M72.67 54.15c-1.73-7.76 10.43-14.62 17.11-23.44.4-.52 1.48-1.96 3.23-2.29 1.87-.35 3.52.86 4.14 1.3 3.84 2.74 7.98 5.04 11.81 7.81 8.38 6.05 13.38 6.39 13.98 10.65.13.9-.04 1.63-.38 3.09-1.07 4.67-3.32 6.24-7.99 12.53-3.53 4.77-2.79 2.79-8.73 9.43-2.8 3.14-3.04 3.52-3.9 3.77-4.05 1.19-7.52-4.76-16.9-12.62-9.14-7.65-11.6-6.81-12.37-10.23z"
      ></path>
      <path
        fill="#D9D4CB"
        d="M111.46 37.52c-1.12-8.42-.03-18.07 6.78-23.97 1.86-1.61 4.33-2.81 6.81-2.82 2.28-.01 4.78.99 5.62 3.28.73 1.98.18 4.32-.67 6.19-1.02 2.24-2.91 3.89-4.83 5.34-5.18 3.89-10.92 7.07-16.89 9.57-1.24.52-2.14 1.65-1.75 3.08.32 1.17 1.82 2.27 3.08 1.75 6.27-2.62 12.3-5.78 17.77-9.84 2.53-1.88 5-3.87 6.57-6.66 1.46-2.59 2.3-5.81 1.94-8.78-.46-3.87-2.98-6.8-6.58-8.17-3.46-1.32-7.25-.72-10.54.81-5.73 2.67-9.6 8.57-11.33 14.48-1.49 5.07-1.7 10.55-1 15.76.18 1.34 1.02 2.5 2.5 2.5 1.23-.02 2.7-1.17 2.52-2.52z"
      ></path>
      <path
        d="M59.39 49.28c-15.48.07-26.55 21.38-38.55 44.45-8.97 17.26-10.65 28.98-14.02 52.42-.71 4.94-1.57 12.25 2.62 16.02 4.31 3.89 12 2.25 19.88-.3 32.06-10.37 53.49-31.39 54.53-32.43 14.7-14.72 30.34-30.38 26.12-43.88-.54-1.73-1.76-4.54-21.35-18.62-16.41-11.79-24.7-17.68-29.23-17.66z"
      ></path>
      <path
        d="M59.39 46.78c-12.14.16-20.58 11.11-26.59 20.37-4.13 6.36-7.71 13.07-11.22 19.78-3.18 6.07-6.32 12.13-8.73 18.55-4.41 11.75-6.16 24.24-7.94 36.6-.89 6.15-2.48 13.26.61 19.06 3.56 6.68 11.75 6.38 18.12 4.94 7.4-1.67 14.62-4.57 21.5-7.72 5.99-2.74 11.79-5.89 17.36-9.39 7.44-4.67 14.59-9.93 21.1-15.84 2.49-2.26 4.82-4.69 7.17-7.09 5.53-5.63 11-11.41 15.52-17.89 3.62-5.19 6.83-11.29 6.89-17.77.02-2.52-.36-5.47-1.8-7.65-1.36-2.05-3.24-3.74-5.08-5.34-4.36-3.79-9.03-7.24-13.7-10.64-5.91-4.31-11.84-8.6-17.91-12.69-3.61-2.43-7.32-4.93-11.41-6.48-1.24-.47-2.57-.79-3.89-.8-3.22-.02-3.22 4.98 0 5 .23 0 .46.04.7.04-.77-.01-.06 0 .29.08.62.15 1.21.36 1.8.58.26.1.41.18.04.01.17.07.33.15.5.22.39.18.77.36 1.14.56.83.43 1.64.88 2.45 1.36 4.77 2.8 9.28 6.06 13.79 9.26 5.75 4.09 11.53 8.17 17.11 12.49 2.92 2.27 5.88 4.58 8.46 7.24.34.35.67.7.98 1.07.09.11.51.63.19.22-.32-.41.06.08.14.2.15.23.29.45.42.69.05.09.08.2.14.28.22.35-.21-.71-.12-.28.34 1.58.75 2.78.75 4.4 0 2.58-.69 5.17-1.72 7.6-2.64 6.21-7.11 11.61-11.57 16.59-4.18 4.68-8.59 9.19-13.09 13.56-1.48 1.44-3.04 2.82-4.62 4.16-3.22 2.74-5.96 4.85-9.36 7.28-9.92 7.08-20.68 13.12-32.06 17.54-3.42 1.33-6.89 2.54-10.42 3.54-3.25.92-6.69 1.77-10.1 1.46-2.42-.22-4.51-1.36-5.56-3.61-1.09-2.35-1.04-5.17-.87-7.7.21-3.09.74-6.05 1.2-9.19.49-3.4 1-6.8 1.56-10.18.93-5.63 2.01-11.25 3.57-16.74 3.49-12.32 9.77-23.64 15.97-34.77 3.21-5.75 6.58-11.53 10.7-16.69C45.06 59 48.78 55.1 53.59 53c1.71-.75 3.85-1.19 5.8-1.22 3.21-.04 3.22-5.04 0-5z"
      ></path>
    </g>
    <text className="text-gray-800 text-lightbulb font-semibold"
      fontFamily="'Arial'"
      transform="translate(22.576 125.867)"
    >
      {/* Om tallet har ett siffer, prefix med nbsp for å sentrere det bedre i lyset*/}
      {nr < 10 ? `\u00A0${nr}` : nr}
    </text>
  </svg>
);

export default Light;
