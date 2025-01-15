import { FC } from "react";
import DiscordIcon from "./discord";
import GithubIcon from "./github";
import LinkedinIcon from "./linkedin";
import Link from "next/link";

const Socials: FC = () => {
  return (
    <div className="flex gap-x-6">
      <DiscordIcon />
      <Link href="https://github.com/PhilipBaravi" target="_blank">
        <GithubIcon />
      </Link>
      <Link
        href="https://www.linkedin.com/in/philip-baravi-2b2a521a2/"
        target="_blank"
      >
        <LinkedinIcon />
      </Link>
    </div>
  );
};

export default Socials;
