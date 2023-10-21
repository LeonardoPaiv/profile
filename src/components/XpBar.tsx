const XpBar = ({w}:{w: number}) => {
  return (
    <div className="w-full h-14 m-3 border border-orange shadow-lg rounded-full p-2">
      <div style={{width: `${w}%`}} className="h-full xpBar shadow-inner rounded-full"></div>
    </div>
  );
};

export default XpBar;
