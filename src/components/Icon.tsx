import { IIcon } from "../models/IIcon";

const Icon = ({link, src, title}: IIcon) => {
  return (
    <a target="_blank" href={link}>
      <img
        src={src}
        alt={title}
        title={title}
        className="w-10 hover:cursor-pointer hover:w-12 ease-in-out duration-300 mr-3"
      />
    </a>
  );
};

export default Icon;
