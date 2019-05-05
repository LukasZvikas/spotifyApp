import React from "react";

interface BackArrowProps {
  action: () => void;
}

export const BackArrow = ({ action }: BackArrowProps) => {
  return (
    <div onClick={action}>
      <svg version="1.1" height="40" width="40" viewBox="0 0 240.823 240.823">
        <path
          fill="#fff"
          d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
		l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
		C52.942,116.507,52.942,124.327,57.633,129.007z"
        />
      </svg>
    </div>
  );
};
