import { FC } from "react";
import MainBtn from "@/components/main-btn";
import Link from "next/link";
import P from "@/components/P";

const CurrentProject: FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200">
      Current Project: InvoiceHub
    </h3>
    <P>
      I'm currently developing InvoiceHub, my first SaaS project, which has been
      an incredible journey in implementing enterprise-level best practices.
      This project showcases my expertise in:
    </P>

    <ul className="list-disc list-inside text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
      <li>Clean Architecture and SOLID principles</li>
      <li>Scalable state management</li>
      <li>Performance optimization</li>
      <li>Security best practices</li>
    </ul>
    <Link href="/projects/invoicehub">
      <MainBtn title="View InvoiceHub" />
    </Link>
  </div>
);

export default CurrentProject;
