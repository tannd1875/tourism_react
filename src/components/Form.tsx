import { VariantProps, cva } from "class-variance-authority";
import { FormHTMLAttributes } from "react";
import { cn } from "../utils/cva";

const formVariants = cva("", {
  variants: {
    variant: {
      filter: "flex flex-col justify-between align-start mb-4 ml-6 gap-4",
      register: "grid grid-cols-2 gap-x-4 gap-y-6 max-sm:grid-cols-1",
    },
  },
  defaultVariants: {
    variant: "filter",
  },
});

export interface FormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {}

const Form = ({ children, className, variant, ...props }: FormProps) => {
  return (
    <form className={cn(formVariants({ variant }), className)} {...props}>
      {children}
    </form>
  );
};

export default Form;
