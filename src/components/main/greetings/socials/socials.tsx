import { FC } from "react";
import DiscordIcon from "./discord";
import GithubIcon from "./github";
import LinkedinIcon from "./linkedin";

const Socials: FC = () => {
  return (
    <div className="flex gap-x-6">
      <DiscordIcon />
      <GithubIcon />
      <LinkedinIcon />
    </div>
  );
};

export default Socials;
