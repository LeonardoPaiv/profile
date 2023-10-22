const XpBar = ({ w }: { w: number }) => {
  return (
    <div className="w-full h-14 border border-orange-400/75 shadow-lg rounded-full p-2">
      <div
        style={{ width: `${w}%` }}
        className={`h-full bg-xp bg-gradient-to-r from-orange-400 via-orange-200 to-orange-400
                    animate-gradient shadow-inner rounded-full`}
      ></div>
    </div>
  );
};

export default XpBar;
