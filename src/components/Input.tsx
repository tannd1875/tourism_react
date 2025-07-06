import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/cva";
import { InputHTMLAttributes } from "react";

const inputVariants = cva("", {
  variants: {
    variant: {
      filter_checkbox: "inline mr-4 scale-[1.75] hover:cursor-pointer",
      text_register:
        "bg-white rounded-full outline-none p-4 text-cyan-800 font-bold block",
      search_input: "flex p-4 w-full outline-none grow-1",
    },
  },
  defaultVariants: {
    variant: "filter_checkbox",
  },
});

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = ({ className, variant, children, ...props }: InputProps) => {
  return (
    <input className={cn(inputVariants({ variant }), className)} {...props}>
      {children}
    </input>
  );
};

export default Input;
