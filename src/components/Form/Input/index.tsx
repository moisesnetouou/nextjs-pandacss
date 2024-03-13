import { forwardRef } from "react";
import {inputStyle} from "./styles"
import { InputControlProps, InputPrefixProps, InputRootProps } from "./types";
import { cx } from "@/styled-system/css";

export function Root({ isError,className,...props }: InputRootProps) {
  const classes = inputStyle({isError})

  return <label className={cx(classes.root, className)} {...props} />;
}

export function PrefixText({
  isError,
  isRequired = false,
  children,
  ...props
}: InputPrefixProps) {
  const classes = inputStyle({isError})

  return (
    <span className={classes.prefixText} {...props}>
      {children}{' '}
      {isRequired && (
        <span className="text-xs/5 font-bold text-[#CC0031]">*</span>
      )}
    </span>
  );
}

export const Control = forwardRef<HTMLInputElement, InputControlProps>(
  ({ className, ...props }, ref) => {
    const classes = inputStyle()

    return (
      <input
        ref={ref}
        className={cx(classes.control, className)}
        {...props}
      />
    );
  },
);
Control.displayName = 'InputControl';