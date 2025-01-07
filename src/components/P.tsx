import { FC } from "react";

type PProps = {
  children: React.ReactNode;
};
const P: FC<PProps> = ({ children }) => {
  return (
    <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </p>
  );
};

export default P;
