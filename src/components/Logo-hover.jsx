import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg
      viewBox="0 0 19 39"
      aria-hidden="true"
      className="h-16 w-auto"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* The hover effect rect is controlled by width */}
      <rect
        className={clsx(
          'transition-all duration-300',
          filled ? 'w-full' : 'w-0',  // Expand on hover
          invert ? 'fill-white' : 'fill-black'
        )}
        width="20"  // Match the width of the SVG
        height="39" // Match the height of the SVG
      />

      {/* First path - logomark shape */}
      <path
        d="M1 19.5C1 9.60891 8.92936 1.5293 19 1.02497V19.5V37.975C13.046 37.6766 7.83589 34.7282 4.57427 30.3223C2.32313 27.2813 1 23.5462 1 19.5Z"
        fill={invert ? 'white' : 'black'}
        stroke={invert ? 'black' : 'white'}
        strokeWidth="2"
      />

      {/* Second path */}
      <path
        d="M20 21.7834H12.4615C12.4615 21.7834 10.3077 28.6904 9.23077 33.4721C8.15385 38.2538 6 30.2843 6 30.2843L18.9231 0H20V21.7834ZM19.9388 19.1269L20 0H18.9231L13.5385 19.1269H19.9388Z"
        fill={invert ? 'black' : 'white'}
      />
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(className)}
      width="200"
      height="100"
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? 'fill-white' : 'fill-black'}
        transform="translate(20, 5)"
        d="M0.0470703 11.5C0.0470703 9.44 0.50707 7.6 1.42707 5.98C2.36707 4.34 3.63707 3.07 5.23707 2.17C6.85707 1.25 8.66707 0.789999 10.6671 0.789999C13.0071 0.789999 15.0571 1.39 16.8171 2.59C18.5771 3.79 19.8071 5.45 20.5071 7.57H15.6771C15.1971 6.57 14.5171 5.82 13.6371 5.32C12.7771 4.82 11.7771 4.57 10.6371 4.57C9.41707 4.57 8.32707 4.86 7.36707 5.44C6.42707 6 5.68707 6.8 5.14707 7.84C4.62707 8.88 4.36707 10.1 4.36707 11.5C4.36707 12.88 4.62707 14.1 5.14707 15.16C5.68707 16.2 6.42707 17.01 7.36707 17.59C8.32707 18.15 9.41707 18.43 10.6371 18.43C11.7771 18.43 12.7771 18.18 13.6371 17.68C14.5171 17.16 15.1971 16.4 15.6771 15.4H20.5071C19.8071 17.54 18.5771 19.21 16.8171 20.41C15.0771 21.59 13.0271 22.18 10.6671 22.18C8.66707 22.18 6.85707 21.73 5.23707 20.83C3.63707 19.91 2.36707 18.64 1.42707 17.02C0.50707 15.4 0.0470703 13.56 0.0470703 11.5ZM36.9344 18.01H28.5944L27.2144 22H22.8044L30.3344 1.03H35.2244L42.7544 22H38.3144L36.9344 18.01ZM35.7944 14.65L32.7644 5.89L29.7344 14.65H35.7944ZM52.889 1.06C55.089 1.06 57.019 1.49 58.679 2.35C60.359 3.21 61.649 4.44 62.549 6.04C63.469 7.62 63.929 9.46 63.929 11.56C63.929 13.66 63.469 15.5 62.549 17.08C61.649 18.64 60.359 19.85 58.679 20.71C57.019 21.57 55.089 22 52.889 22H45.569V1.06H52.889ZM52.739 18.43C54.939 18.43 56.639 17.83 57.839 16.63C59.039 15.43 59.639 13.74 59.639 11.56C59.639 9.38 59.039 7.68 57.839 6.46C56.639 5.22 54.939 4.6 52.739 4.6H49.769V18.43H52.739Z"
      />
    </svg>
  )
}

