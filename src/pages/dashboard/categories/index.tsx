import { Button } from '@/components/Button';
import { prisma } from '@/lib/prisma';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoriesPageProps {
  categories: Category[];
}

export default function CategoriesPage({ categories }: CategoriesPageProps) {
  const router = useRouter();

  async function redirectToCreateCategory() {
    await router.push('categories/create');
  }

  return (
    <div className="flex w-full flex-col gap-6 overflow-hidden sm:max-w-lg">
      <h1 className="self-center text-2xl font-semibold">Categories</h1>

      <div className="flex items-start justify-center">
        <Button onClick={redirectToCreateCategory}>New category</Button>
      </div>

      <ul className="grid gap-2 overflow-auto">
        {categories.map(c => (
          <li className="rounded bg-gray-700 px-4 py-2" key={c.id}>
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.category.findMany();

  const categories = data.map(category => ({
    ...category,
    createdAt: category.createdAt.toISOString(),
    updatedAt: category.updatedAt.toISOString(),
  }));

  return {
    props: {
      categories,
    },
  };
};
