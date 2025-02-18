import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/cva";

const buttonVariants = cva("text-center font-bold", {
  variants: {
    variant: {
      search:
        "lg:w-1/6 w-full border-white border bg-green-300 p-4 font-bold hover:cursor-pointer text-center",
      info: "block max-w-44 text-center mx-auto my-4 border-2 rounded px-8 text-xl uppercase bg-orange-300 text-white hover:scale-105 hover:font-semibold transition-transform duration-300",
    },
    size: {
      default: "w-20",
      small: "w-1/6",
      medium: "w-1/2",
      large: "w-full",
    },
  },
  defaultVariants: {
    variant: "info",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, size, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants, size, variant, className)}
      {...props}
    ></button>
  );
};

export { Button };
