
import { ButtonHTMLAttributes, forwardRef } from "react";
import { ButtonVariants, buttonStyle } from "./styles";
import { styled } from "@/styled-system/jsx";

/** export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants
>(({ className, variant,...props }, ref) => (
  <button ref={ref} className={styles({variant})} {...props} />
));
Button.displayName = 'Button'; **/

export const Button = styled("button", buttonStyle)