import ShowCodeSnippet from "@/components/codeSnippet/ShowCodeSnippet";
import StringLiterals from "@/lessons/ts/StringLiterals";
import UnionInStringLiterals from "@/lessons/ts/UnionInStringLiterals";
import React from "react";

const page = () => {
  return (
    <>
      <StringLiterals />
      <div className="w-2/3 rounded-full mx-auto h-0.5 bg-slate-300 dark:bg-slate-500 my-4"></div>
      <UnionInStringLiterals />
    </>
  );
};

export default page;
