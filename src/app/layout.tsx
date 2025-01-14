import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/layouts/auth-provider";
export const metadata: Metadata = {
  title: "Shopping",
  description: "Hello This E-Commerce Site / Online Shop",

  metadataBase: new URL('https://ppekkungz.in.th'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'th-TH': '/th-TH',
    },
  },
  openGraph: {
    url: 'https://ppekkungz.in.th',
    type: 'website', // or website
    locale: 'th_TH',
    title: "Shopping",
    description: "Hello This E-Commerce Site / Online Shop",
    images: [
      {
        url: 'https://i.imgur.com/v8oDNHA.png',
        width: 200,
        height: 200,
        alt: '',
      },
    ],
  },
  twitter: {
    title: "",
    description: "Hello This E-Commerce Site / Online Shop",
    card: 'summary_large_image',
    site: 'Shopping',
    creator: 'Shopping',
    images: [
      'https://i.imgur.com/v8oDNHA.png',
    ],
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
          <AuthProvider>
            {children}
          </AuthProvider>
      </body>
    </html>
  );
}
