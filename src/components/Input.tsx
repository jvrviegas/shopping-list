import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface InputProps {
  name: string;
  label?: string;
  register: any;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  label,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="mt-2 rounded-md px-4 py-2"
        {...register(name, { required: true })}
      />
      {error && (
        <span className="mt-1 text-red-400">This field is required</span>
      )}
    </div>
  );
};

export const Input = forwardRef(InputBase);
