import { FC } from "react";
import Image from "next/image";

const CodeWarsIcon: FC = () => {
  return (
    <Image
      src="https://www.codewars.com/users/PhilipBaravi/badges/large"
      width={250}
      height={40}
      className="w-auto h-auto"
      alt="CodeWars Stats"
    />
  );
};

export default CodeWarsIcon;
