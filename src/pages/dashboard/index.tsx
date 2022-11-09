import type { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

const Home: NextPage = () => {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <div className="flex min-h-full flex-col items-center bg-gray-900 py-12 px-4 sm:px-6 lg:mx-auto lg:mt-40 lg:min-h-fit lg:max-w-2xl lg:rounded-xl lg:px-8 lg:shadow-lg lg:shadow-gray-800">
      <div className="mb-10 flex flex-col items-center justify-center">
        <p>Bem vindo ao</p>
        <h1 className="mb-4 text-2xl lg:text-3xl">Shopping List</h1>
        <Image src="/images/shopping-list-logo.png" width="120" height="120" />
      </div>

      <button
        onClick={handleSignOut}
        className="mr-2 mb-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
