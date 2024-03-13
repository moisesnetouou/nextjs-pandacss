import {cva, type RecipeVariantProps}  from "@/styled-system/css"

export const buttonStyle = cva({
  base: {
    cursor: "pointer",
    bg: "blue.500",
    rounded: "0.5rem",
    p: "16px",
    color: "white",
    transition: "colors",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    _hover: {
      bg: "blue.600"
    }
  },
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>