import React from "react";

type Props = {
  title: string;
};

const LessonTitle: React.FC<Props> = ({ title }) => {
  return (
    <h2
      className={`rounded-3xl text-slate-700 bg-slate-100
    dark:bg-slate-700 dark:text-slate-100
    mb-6 mt-4 w-fit p-3 font-extrabold flex
    items-center text-xl
    hover:dark:text-slate-400 hover:dark:bg-slate-700
    hover:text-slate-200 hover:bg-slate-700
    transition-all
    `}
    >
      {title}
    </h2>
  );
};

export default LessonTitle;
