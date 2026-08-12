import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitbee × hi!錢錢｜理財文章分享任務活動條款",
  description: "Bitbee × hi!錢錢理財文章分享任務活動辦法暨使用者條款（v1.1）",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
