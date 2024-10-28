import type { Metadata } from 'next';
import GlobalStyles from './styles/global';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Rachel Okimoto Portfolio',
  description:
    'Rachel Okimoto is a senior frontend web developer with 9+ years of experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
