import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import Image from 'next/image';

import { Form } from '../components/Form';

export default function SignIn() {
  return (
    <div className="flex flex-col min-h-full items-center py-40 px-8 bg-gray-900 sm:px-6 lg:px-8 lg:max-w-2xl lg:min-h-fit lg:mt-40 lg:mx-auto lg:rounded-xl lg:shadow-lg lg:shadow-gray-800 ">
      <div className="flex flex-col items-center justify-center mb-10">
        <p>Bem vindo ao</p>
        <h1 className="text-2xl mb-4 lg:text-3xl">Shopping List</h1>
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
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
