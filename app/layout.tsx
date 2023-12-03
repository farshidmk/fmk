import "./globals.css";
import { Metadata } from "next";
import Providers from "@/theme/ThemeProvider";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  // title: "دلخوشی ساده",
  description: "بلاگ فرشید منوچهری، آموزش برنامه نویسی، بازی و مطالب دیگر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ height: "100vh" }}>
        <Providers>
          {/* <div className="overflow-x-hidden"> */}
          {/* <Header /> */}
          <div className="dark:bg-slate-600 bg-slate-400 h-full p-5 ">
            <div className="max-w-6xl m-auto">{children}</div>
          </div>
          {/* </div> */}
        </Providers>
      </body>
    </html>
  );
}
