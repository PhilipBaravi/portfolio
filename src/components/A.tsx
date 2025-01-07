import { FC } from "react";

type AProps = {
  href: string;
  children: React.ReactNode;
};

const A: FC<AProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-blue-500 hover:underline dark:text-blue-400"
    >
      {children}
    </a>
  );
};

export default A;
