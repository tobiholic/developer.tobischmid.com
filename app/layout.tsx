import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Webentwickler Tobias Schmid',
  description:
    'Freelancer für Webentwicklung- und design, Online Marketing und SEO aus Oberasbach bei Nürnberg. Jetzt kostenloses Angebot anfragen stellen und Erstgespräch vereinbaren. ',
  keywords:
    'Freelancer, Freiberufler, Selbstständig, Marketing, Online Marketing, Website erstellen, Webdesigner, Website für mein Business ',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tobischmid.com',
    languages: {
      'de-DE': 'https://tobischmid.com/about-de',
      'en-EN': 'https://tobischmid.com',
    },
  },
  openGraph: {
    locale: 'de_DE',
    type: 'website',
    siteName: 'Tobias Schmid | Freelancer Webdesign & -entwicklung',
    url: 'https://tobischmid.com',
    title: 'Dein Freelancer für Webentwicklung | Tobias Schmid',
    description:
      'Du suchst die richtige Unterstützung, um deinen Online Auftritt professionell zu gestalten? Tobias Schmid hi',
    images: [
      {
        url: 'https://www.tobischmid.com/wp-content/uploads/2024/12/tobischmid-socialImage.webp',
        width: 1200,
        height: 630,
        alt: 'Tobias Schmid | Dein Freelancer für Webentwicklung und Online Marketing ',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="selection:bg-purple-500 selection:bg-opacity-20 scroll-smooth"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
