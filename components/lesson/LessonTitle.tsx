import React from "react";

type Props = {
  title: string;
};

const LessonTitle: React.FC<Props> = ({ title }) => {
  return (
    <h2
      className={`rounded-3xl text-slate-700 bg-slate-100
    dark:bg-slate-400 dark:text-logoColor
    mb-6 mt-4 w-fit p-3 font-extrabold flex
    items-center text-2xl`}
    >
      {title}
    </h2>
  );
};

export default LessonTitle;
