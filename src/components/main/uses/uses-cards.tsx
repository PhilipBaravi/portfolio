import { FC } from "react";
import { UsesGrid } from "./uses-grid";

const UsesCards: FC = () => {
  return (
    <section className="w-full justify-start items-center gap-y-4">
      <UsesGrid />
    </section>
  );
};

export default UsesCards;
