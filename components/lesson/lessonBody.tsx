import React from "react";

type Props = {
  children: JSX.Element;
};

const LessonBody: React.FC<Props> = ({ children }) => {
  return <div className="p-2 mt-5">{children}</div>;
};

export default LessonBody;
