import { ComponentProps, InputHTMLAttributes } from 'react';
import { InputVariants } from "./styles";

export type InputRootProps = ComponentProps<'label'> & InputVariants;

export type InputPrefixProps = ComponentProps<'div'> &
  InputVariants & {
    isRequired?: boolean;
  };

  export interface InputControlProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputVariants {}
