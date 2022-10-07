import React from "react";

interface Props {
  bgcolor?: string;
  textcolor?: string;
  text: string;
  icon?: any;
}
export const Button: React.FC<Props> = ({ bgcolor, icon, text, textcolor }) => {
  return (
    <button className={`flex gap-x-2 bg-red-600/70 border-red-500 hover:bg-red-500 lg:px-2 lg:py-2 px-1 py-1 text-white font-semibold rounded-md border lg:text-sm text-xs `}>
      {icon}
      {text}
    </button>
  );
};
