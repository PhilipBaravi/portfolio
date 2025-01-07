import { FC } from "react";
import UsesCards from "./uses-cards";

const Uses: FC = () => {
  return (
    <section className="mb-8 space-y-4 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
      <UsesCards />
    </section>
  );
};

export default Uses;
