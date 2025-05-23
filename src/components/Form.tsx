import { VariantProps, cva } from "class-variance-authority";
import { FormHTMLAttributes } from "react";
import { cn } from "../utils/cva";

const formVariants = cva("", {
  variants: {
    variant: {
      filter_form: "flex flex-col justify-between align-start mb-4 ml-6 gap-4",
    },
  },
  defaultVariants: {
    variant: "filter_form",
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
