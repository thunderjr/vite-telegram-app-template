export const Loading = ({ showLogo = false }) => {
  return (
    <div className="flex flex-col items-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-lg p-12">
      {showLogo && (
        // <img
        //   className="dark:invert mb-10 w-20 h-20"
        //   alt="x-wallet-logo"
        //   src={svgLogo}
        // />
        <></>
      )}
      <div className="w-8 h-8 border-4 border-white rounded-full border-t-[#1f1f1f] animate-spin" />
    </div>
  );
};
