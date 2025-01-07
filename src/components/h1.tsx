import { FC } from "react";

type H1Props = {
  title: string;
};

const H1: FC<H1Props> = ({ title }) => {
  return (
    <h1
      className={`text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight mb-4 text-center`}
    >
      {title}
    </h1>
  );
};

export default H1;
