import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import Image from 'next/image';

import { Form } from '../components/Form';

export default function SignIn() {
  return (
    <div className="flex min-h-full flex-col items-center bg-gray-900 py-40 px-8 sm:px-6 lg:mx-auto lg:mt-40 lg:min-h-fit lg:max-w-2xl lg:rounded-xl lg:px-8 lg:shadow-lg lg:shadow-gray-800 ">
      <div className="mb-10 flex flex-col items-center justify-center">
        <p>Bem vindo ao</p>
        <h1 className="mb-4 text-2xl lg:text-3xl">Shopping List</h1>
        <Image src="/images/shopping-list-logo.png" width="120" height="120" />

        <p className="mt-4 text-center">
          Faça o login para acessar a aplicação:
        </p>
      </div>

      <Form />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
