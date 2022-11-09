import { MouseEventHandler, ReactNode } from 'react';
import { Spinner } from './Spinner';

interface ButtonProps {
  children: ReactNode;
  variant?: 'solid' | 'outline';
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  children,
  isLoading,
  isDisabled,
  variant = 'solid',
  onClick,
}: ButtonProps) {
  const base =
    'mt-4 h-min flex items-center justify-center rounded-md px-6 py-2 transition-all duration-200 ease-in-out';
  const styles = {
    solid: `${base} bg-gray-600 hover:bg-gray-500`,
    outline: `${base} bg-transparent border-2 border-gray-600 hover:bg-gray-600 hover:border-gray-600`,
  };

  return (
    <button
      className={styles[variant]}
      disabled={isLoading || isDisabled}
      onClick={onClick}
    >
      <>
        {isLoading && <Spinner />}
        {isLoading ? 'Loading...' : children}
      </>
    </button>
  );
}
