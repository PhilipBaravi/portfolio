import { FC } from "react";
import { Delius_Swash_Caps } from "@next/font/google";
import Link from "next/link";

const deliusSwashCaps = Delius_Swash_Caps({
  subsets: ["latin"], // Specify the character subset you need
  weight: "400", // Delius Swash Caps only supports 400 weight
});

const Logo: FC = () => {
  return (
    <Link href="/">
      <p className={`${deliusSwashCaps.className} font-bold text-[30px]`}>P</p>
    </Link>
  );
};

export default Logo;
