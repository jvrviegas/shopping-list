import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import api from '@/lib/api';
import { errorsHandler } from '@/utils/errorsHandler';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function CreateCategoryPage() {
  const router = useRouter();
  const { handleSubmit, formState, register } = useForm();
  const { errors } = formState;

  const [loading, setLoading] = useState(false);

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      await api.post('categories/create', {
        name: data.name,
      });

      router.back();
    } catch (error: any) {
      setLoading(false);
      errorsHandler(error);
    }
  }

  console.log({ errors });

  return (
    <div className="flex w-5/6 max-w-lg flex-col items-center justify-center rounded-lg bg-gray-700 px-12 py-8">
      <h1 className="text-xl">Criar Categoria</h1>
      <form
        className="mt-6 flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="name"
          label="Name"
          error={errors.name}
          register={register}
        />

        <Button isLoading={loading}>Submit</Button>
      </form>
    </div>
  );
}
