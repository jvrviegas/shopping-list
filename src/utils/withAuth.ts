import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export async function withAuth(
  context: GetServerSidePropsContext,
  callback?: () => {},
) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  if (callback) {
    return callback();
  }

  return { props: { session } };
}
