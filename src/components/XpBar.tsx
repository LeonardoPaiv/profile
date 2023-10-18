const XpBar = ({w}:{w: number}) => {
  return (
    <div className="w-128 h-14 m-3 border border-orange shadow-lg rounded-full p-2">
      <div style={{width: `${w}%`}} className="h-full bg-purple shadow-inner rounded-full"></div>
    </div>
  );
};

export default XpBar;
