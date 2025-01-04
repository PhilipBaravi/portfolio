import { FC } from "react";

type IconWrap = {
  children: React.ReactNode;
};

const IconWrap: FC<IconWrap> = ({ children }) => {
  return (
    <div className="hover:bg-stone-300/50 dark:hover:bg-stone-800/50 rounded-lg cursor-pointer hover:scale-[1.1]">
      {children}
    </div>
  );
};

export default IconWrap;
