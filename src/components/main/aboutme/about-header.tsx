import MainBtn from "@/components/main-btn";
import Link from "next/link";
import { FC } from "react";
import ResumeButton from "../greetings/resume-button";
import UsesH2 from "../uses/uses-h2";

const AboutHeader: FC = () => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div className="flex gap-4">
      <ResumeButton />
      <Link href="/uses">
        <MainBtn title="Check my stack" />
      </Link>
    </div>
  </div>
);

export default AboutHeader;
