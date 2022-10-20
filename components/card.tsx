import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

export const Card = ({ className: propCss, children }: CardProps) => (
  <div className={"m-2 p-5 text-left rounded-lg w-full shadow-lg " + propCss}>
    {children}
  </div>
);
