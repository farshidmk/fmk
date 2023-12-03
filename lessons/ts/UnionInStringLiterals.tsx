import ShowCodeSnippet from "@/components/codeSnippet/ShowCodeSnippet";
import LessonTitle from "@/components/lesson/LessonTitle";
import LessonBody from "@/components/lesson/lessonBody";
import React from "react";

let placeholder = "`${Games} with ${Levels} level`";
const code = `
type Levels = "hard" | "Medium" | "easy" 
type Games = "Spelendor" | "Catan" | "Radlands"

type GamesAndLevels = Levels|Games
type AllGamesLevel = ${placeholder} // "Spelendor with hard level" | "Spelendor with Medium level" | "Spelendor with easy level" | "Catan with hard level" | "Catan with Medium level" | "Catan with easy level" | "Radlands with hard level" | "Radlands with Medium level" | "Radlands with easy level"

`;
const UnionInStringLiterals = () => {
  return (
    <>
      <LessonTitle title="Union in String Literals" />
      <LessonBody>
        <>
          <p>
            اگر چند union داشته باشیم و بخواهیم از ترکیب مجموع آنها یک type جدید
            ایجاد کنیم میتوان طبق مثال زیر انجام داد
          </p>
          <ShowCodeSnippet code={code} />
        </>
      </LessonBody>
    </>
  );
};

export default UnionInStringLiterals;
