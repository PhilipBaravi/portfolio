import { FC } from "react";
import P from "@/components/P";
import Link from "next/link";

const AboutDescription: FC = () => (
  <>
    <P>
      I'm a passionate React Front-End Developer 🚀 with expertise in building
      sophisticated management systems and web applications. With a strong
      foundation in modern web technologies ⚙️ and an eye for detail, I
      specialize in creating intuitive user interfaces that enhance business
      operations.
    </P>

    <P>
      What sets me apart is my commitment to delivering high-quality code 🏆 and
      my ability to translate complex business requirements into elegant
      solutions. I thrive in collaborative environments 🤝 and consistently
      receive praise for my clear communication and problem-solving abilities.
    </P>

    <P>
      I maintain an active presence on{" "}
      <Link
        href="https://github.com/PhilipBaravi"
        target="_blank"
        className="text-blue-500 hover:underline dark:text-blue-400 inline-flex items-center gap-1"
      >
        GitHub
      </Link>{" "}
      where I host my projects and contribute to the developer community 🌐.
    </P>
  </>
);

export default AboutDescription;
