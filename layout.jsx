import './globals.css';

export const metadata = {
  title: '今天吃什麼 × 莉娜',
  description: '不知道今天吃什麼？交給莉娜幫你決定。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
