import "./globals.css";
import { Metadata } from "next";
import Providers from "@/theme/ThemeProvider";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "دلخوشی ساده",
  description: "بلاگ فرشید منوچهری، آموزش برنامه نویسی، بازی و مطالب دیگر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>
          <div className="overflow-x-hidden">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
