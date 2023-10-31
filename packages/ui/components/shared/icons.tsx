import { cn } from "@/lib/utils";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Loading = (props: IconProps) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      className="origin-center animate-spin"
      d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
    />
  </svg>
);

export const DAI = (props: React.BaseHTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width="100%"
    height="100%"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 444.44 444.44"
    {...props}
  >
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer" />
      <path
        fill="#F5AC37"
        fillRule="nonzero"
        d="M222.22 0c122.74,0 222.22,99.5 222.22,222.22 0,122.74 -99.48,222.22 -222.22,222.22 -122.72,0 -222.22,-99.49 -222.22,-222.22 0,-122.72 99.5,-222.22 222.22,-222.22z"
      />
      <path
        fill="#FEFEFD"
        fillRule="nonzero"
        d="M230.41 237.91l84.44 0c1.8,0 2.65,0 2.78,-2.36 0.69,-8.59 0.69,-17.23 0,-25.83 0,-1.67 -0.83,-2.36 -2.64,-2.36l-168.05 0c-2.08,0 -2.64,0.69 -2.64,2.64l0 24.72c0,3.19 0,3.19 3.33,3.19l82.78 0zm77.79 -59.44c0.24,-0.63 0.24,-1.32 0,-1.94 -1.41,-3.07 -3.08,-6 -5.02,-8.75 -2.92,-4.7 -6.36,-9.03 -10.28,-12.92 -1.85,-2.35 -3.99,-4.46 -6.39,-6.25 -12.02,-10.23 -26.31,-17.47 -41.67,-21.11 -7.75,-1.74 -15.67,-2.57 -23.61,-2.5l-74.58 0c-2.08,0 -2.36,0.83 -2.36,2.64l0 49.3c0,2.08 0,2.64 2.64,2.64l160.27 0c0,0 1.39,-0.28 1.67,-1.11l-0.68 0zm0 88.33c-2.36,-0.26 -4.74,-0.26 -7.1,0l-154.02 0c-2.08,0 -2.78,0 -2.78,2.78l0 48.2c0,2.22 0,2.78 2.78,2.78l71.11 0c3.4,0.26 6.8,0.02 10.13,-0.69 10.32,-0.74 20.47,-2.98 30.15,-6.67 3.52,-1.22 6.92,-2.81 10.13,-4.72l0.97 0c16.67,-8.67 30.21,-22.29 38.75,-39.01 0,0 0.97,-2.1 -0.12,-2.65zm-191.81 78.75l0 -0.83 0 -32.36 0 -10.97 0 -32.64c0,-1.81 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -26.39 32.22 0c1.8,0 2.5,0 2.5,-2.36l0 -26.11c0,-1.67 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -24.44c0,-1.53 0,-1.94 2.22,-1.94l29.86 0c2.08,0 2.64,0 2.64,-2.64l0 -74.86c0,-2.22 0,-2.78 2.78,-2.78l104.16 0c7.56,0.3 15.07,1.13 22.5,2.5 15.31,2.83 30.02,8.3 43.47,16.11 8.92,5.25 17.13,11.59 24.44,18.89 5.5,5.71 10.46,11.89 14.86,18.47 4.37,6.67 8,13.8 10.85,21.25 0.35,1.94 2.21,3.25 4.15,2.92l24.86 0c3.19,0 3.19,0 3.33,3.06l0 22.78c0,2.22 -0.83,2.78 -3.06,2.78l-19.17 0c-1.94,0 -2.5,0 -2.36,2.5 0.76,8.46 0.76,16.95 0,25.41 0,2.36 0,2.64 2.65,2.64l21.93 0c0.97,1.25 0,2.5 0,3.76 0.14,1.61 0.14,3.24 0,4.85l0 16.81c0,2.36 -0.69,3.06 -2.78,3.06l-26.25 0c-1.83,-0.35 -3.61,0.82 -4.03,2.64 -6.25,16.25 -16.25,30.82 -29.17,42.5 -4.72,4.25 -9.68,8.25 -14.86,11.94 -5.56,3.2 -10.97,6.53 -16.67,9.17 -10.49,4.72 -21.49,8.2 -32.78,10.41 -10.72,1.92 -21.59,2.79 -32.5,2.64l-96.39 0 0 -0.14z"
      />
    </g>
  </svg>
);

export const THEDAO = ({
  className,
  ...props
}: React.BaseHTMLAttributes<SVGElement>) => {
  return (
    <svg
      viewBox="0 0 226.8 226.8"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <g fill="#ff3b3b">
        <path d="m119 46.5h-50.7v59.3h45.1v14.9h-45.1v58.1h49.8c26.7 0 51.5-15.2 51.5-65.6.1-50.4-30.4-66.7-50.6-66.7z" />
        <path d="m0 0v226.8h226.8v-226.8zm118.3 200.9h-72.8v-80.2h-16.9v-14.9h16.9v-81.3h74c29.6 0 74 21.7 74 88.9s-36.1 87.5-75.2 87.5z" />
      </g>
    </svg>
  );
};

export const BCC = ({
  className,
  ...props
}: React.BaseHTMLAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 2000"
      width="2500"
      height="2500"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <circle cx="1000" cy="1000" r="1000" fill="#f7931c" />
      <path
        d="M459.44 1207.55c-.53-188.32 132.08-346.31 321.71-381.84 16.23-3 20.82-8.44 20.42-24.33-1.06-42.25-1-84.55 0-126.8.33-15.23-4.52-24.26-17.58-32.78-45.54-29.7-64.15-83.65-47.5-132.22 17.59-51.32 64.25-83.23 118-80.69 48.19 2.28 92.18 38.09 105.2 85.64 13.08 47.78-5.14 99.74-47.51 126.64-15 9.5-19.65 19.11-19.15 36.07 1.26 42.23.76 84.54.19 126.8-.17 12.27 1.65 18.84 16.2 20.73a303.83 303.83 0 0 1 80.41 22.11c9.63 4.12 14.8 1.59 21.24-5.5q134.56-148.25 269.88-295.81c9.3-10.11 6.61-17.09 2.35-27.56-22-54.22-9.13-112.75 32.4-151.49 37.84-35.31 100.5-45.39 145.73-23.46 53.27 25.83 82.51 75.29 78.87 133.41-4.88 77.81-80.46 136.36-157.22 120.4-15.55-3.23-24.61.53-34.67 11.65q-125.22 138.41-251.49 275.87c-10.16 11.06-11.62 17 1.09 28 137.71 120.1 175.22 301.14 96.75 466-5.93 12.46-4.62 19.63 4.94 28.73 23 21.82 45.2 44.4 67.2 67.18 8.75 9.06 16.92 11.47 29.9 8.19 50.68-12.79 103.12 10 128.41 53.89a116.62 116.62 0 0 1-16.36 138.28c-34.63 36.81-91.14 47.49-135.11 25.54-48-24-74.5-75.35-63.09-128 3.28-15.12-.2-23.74-10.32-33.35-18.6-17.65-36.77-35.8-54.2-54.6-10.17-11-16.49-11.17-28.18-.27-118.63 110.63-256.28 139.26-408.15 85.3-150.99-53.59-249.91-200.38-250.36-361.73"
        fill="#fefdfc"
      />
    </svg>
  );
};
