import { FC } from "react";
import Image from "next/image";
import P from "@/components/P";

const CodingChallenges: FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200">
      Coding Challenges
    </h3>
    <P>From time to time I sharpen my problem-solving skills on Codewars: </P>

    <Image
      src="https://www.codewars.com/users/PhilipBaravi/badges/large"
      alt="Codewars Profile Badge"
      width={400}
      height={40}
      className="rounded-md"
    />
  </div>
);

export default CodingChallenges;
