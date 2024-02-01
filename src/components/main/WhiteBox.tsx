import { ReactNode } from "react";

interface WhiteBoxType {
  children: ReactNode;
  className?: string;
}
const WhiteBox = ({ children, className }: WhiteBoxType) => {
  return (
    <div
      className={`nflex nflex-row nbg-white nrounded-full np-3 njustify-center nitems-center nfont-semibold ${className}`}
    >
      {children}
    </div>
  );
};

export default WhiteBox;
