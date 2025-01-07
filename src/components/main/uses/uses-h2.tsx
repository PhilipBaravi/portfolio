import { FC } from "react";

type UsesH2Props = {
  title: string;
};

const UsesH2: FC<UsesH2Props> = ({ title }) => {
  return (
    <h2
      className={`text-xl md:text-2xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight mb-4 `}
    >
      {title}
    </h2>
  );
};

export default UsesH2;
