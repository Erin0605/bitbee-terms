import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bitbee-hi-money-terms.erin-hk14.chatgpt.site"),
  title: "Bitbee × hi!錢錢｜理財文章分享任務活動條款",
  description: "公開分享1次，獲得NT$10等值BTC。查看參加方式、次數計算、有效分享規則及完整活動條款。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Bitbee × hi!錢錢｜理財文章分享任務",
    description: "公開分享1次，獲得NT$10等值BTC。每月最多12次分享機會。",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bitbee × hi!錢錢理財文章分享任務" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitbee × hi!錢錢｜理財文章分享任務",
    description: "公開分享1次，獲得NT$10等值BTC。每月最多12次分享機會。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
