import ShowCodeSnippet from "@/components/codeSnippet/ShowCodeSnippet";
import LessonTitle from "@/components/lesson/LessonTitle";
import LessonBody from "@/components/lesson/lessonBody";
import React from "react";

const StringLiterals = () => {
  const code = `type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";
type DynamicRoutes = Extract<Routes, ${"`${string}`"}:${"`${string}`"} >;`;
  return (
    <div className="h-full">
      <LessonTitle title="Template Literals" />
      <LessonBody>
        <>
          <p className="mb-4">
            اگر مجموعه ای از string ها داشته باشیم مثلا لیستی از مسیرهای داخل
            برنامه و بخواهیم مسیرهای داینامیک را فقط انتخاب کنیم باید از
            temmplate litrals استفاده کنیم.
            <br />
            مثال:
          </p>
          <ShowCodeSnippet code={code} />
          <p>
            در مثال بالا
            <code className="mx-1">DynamicRoutes</code>
            فقط مسیرهایی را قبول میکند که شامل
            <code className="mx-1">:id</code>
            باشد، یعنی دوبخشی باشد ( طبق template literal ای که تعریف کردیم )
          </p>
        </>
      </LessonBody>
    </div>
  );
};

export default StringLiterals;
