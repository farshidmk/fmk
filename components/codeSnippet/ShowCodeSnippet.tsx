"use client";
import React from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  language?: string;
  code: string;
  props?: SyntaxHighlighterProps;
};

const ShowCodeSnippet: React.FC<Props> = ({
  language = "typescript",
  code,
  props,
}) => {
  return (
    <Prism
      style={vscDarkPlus}
      customStyle={{ direction: "ltr" }}
      showLineNumbers
      wrapLines
      language={language}
      {...props}
    >
      {code}
    </Prism>
  );
};

export default ShowCodeSnippet;
