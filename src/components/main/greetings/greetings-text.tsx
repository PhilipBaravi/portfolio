import { FC } from "react";

const GreetingsText: FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
        Passionate developer crafting elegant solutions. Transforming ideas into
        reality through code and creativity.
      </p>
    </div>
  );
};

export default GreetingsText;
