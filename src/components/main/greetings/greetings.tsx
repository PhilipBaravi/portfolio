import { FC } from "react";
import PortfolioCodeEditor from "./editor/portfolio-code-editor";
import GreetingsText from "./greetings-text";

const Greetings: FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start w-full  mx-auto gap-6 px-6 py-8">
      {/* Text Section */}
      <div className="flex-1 w-full">
        <GreetingsText />
      </div>

      {/* Code Editor Section */}
      <div className="flex-1 w-full">
        <PortfolioCodeEditor />
      </div>
    </section>
  );
};

export default Greetings;
