import type { GetServerSidePropsContext, NextPage } from 'next';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

import { withAuth } from '../utils/withAuth';

const Home: NextPage = () => {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <div className="flex flex-col min-h-full items-center py-12 px-4 bg-gray-900 sm:px-6 lg:px-8 lg:max-w-2xl lg:min-h-fit lg:mt-40 lg:mx-auto lg:rounded-xl lg:shadow-lg lg:shadow-gray-800 ">
      <div className="flex flex-col items-center justify-center mb-10">
        <p>Bem vindo ao</p>
        <h1 className="text-2xl mb-4 lg:text-3xl">Shopping List</h1>
        <Image src="/images/shopping-list-logo.png" width="120" height="120" />
      </div>

      <button
        onClick={handleSignOut}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Sign Out
      </button>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await withAuth(context);
}

export default Home;
