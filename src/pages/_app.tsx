import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

import { Container } from '@/components/Container';

import '../styles/globals.css';

interface PageProps {
  session: Session;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<PageProps>) {
  return (
    <SessionProvider session={session}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
}

export default MyApp;
