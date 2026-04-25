import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Заполняем профессиональные метаданные для SEO
export const metadata: Metadata = {
  title: "Букет-СБ — Доставка цветов в Сосновом Бору | Сеть павильонов",
  description: "Заказывайте свежие авторские букеты и цветочные композиции в Сосновом Бору. Сеть из 4 павильонов. Доставка от 60 минут, круглосуточный заказ.",
  keywords: ["доставка цветов сосновый бор", "купить цветы сосновый бор", "букет сб", "цветы круглосуточно", "авторские букеты"],
  
  // Подключаем твою иконку
  icons: {
    icon: "/buket-sb.png",
    shortcut: "/buket-sb.png",
    apple: "/buket-sb.png", // иконка для iOS устройств при сохранении на экран
  },
  
  // Дополнительные настройки для соцсетей (Open Graph)
  openGraph: {
    title: "Букет-СБ — Доставка цветов в Сосновом Бору",
    description: "Свежие цветы и авторские букеты с доставкой от 30 минут в Сосновом Бору.",
    url: "https://buketsb.ru", // укажи свой домен, когда запустишь
    siteName: "Букет-СБ",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Поменял lang на "ru", так как сайт на русском
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FCF9F7]">{children}</body>
    </html>
  );
}