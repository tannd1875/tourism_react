import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/cva";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  "text-center hover:scale-105 hover:font-bold hover:cursor-pointer transition-transform duration-300",
  {
    variants: {
      variant: {
        search:
          "lg:w-1/6 w-full border-white border bg-green-300 p-4 font-semibold",
        info: "block max-w-44 text-center mx-auto my-4 border-2 rounded py-4 px-8 text-xl uppercase bg-orange-300 text-white",
        submenu:
          "text-black p-4 hover:bg-zinc-400 hover:shadow-sm rounded hover:text-white w-max hover:font-semibold",
        form: "block py-4 w-full rounded-md text-white mb-2 font-bold",
        filter_mobile:
          "px-4 py-2 border rounded-sm mb-4 right-0 -mt-4 ml-60 sm:hidden",
        tip_info:
          "block w-1/3 text-center max-sm:w-36 lg:text-2xl text-xl lg:bg-gray-500 text-white lg:p-6 p-4 mt-4 rounded-md lg:hover:bg-amber-500 bg-amber-500",
        related_list:
          "text-xl mb-2 text-justify hover:cursor-pointer block bg-slate-500 p-4 rounded text-white hover:bg-amber-400 text-center",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  to?: string;
}

const Button = ({
  className,
  variant,
  to,
  children,
  ...props
}: ButtonProps) => {
  if (to) {
    return (
      <Link to={to} className={cn(buttonVariants({ variant }), className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
