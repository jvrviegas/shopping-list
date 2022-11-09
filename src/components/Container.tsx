import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type ContainerType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface ContainerProps extends ContainerType {
  children: ReactNode;
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <div
      className="flex h-full flex-col items-center bg-gray-900 py-4 px-4 sm:px-6 lg:px-8"
      {...rest}
    >
      {children}
    </div>
  );
}
