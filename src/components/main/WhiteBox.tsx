import { Outlet } from "react-router-dom";
const WhiteBox = (className: string) => {
  return (
    <div
      className={`nflex nflex-row nbg-white nrounded-full np-3 njustify-center nitems-center nfont-semibold ${className}`}
    >
      <Outlet />
    </div>
  );
};

export default WhiteBox;
