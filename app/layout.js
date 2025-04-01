import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PayHere Payment',
  description: 'Secure payment integration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src={process.env.NEXT_PUBLIC_PAYHERE_JS} async defer />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen p-4">{children}</main>
      </body>
    </html>
  );
}
