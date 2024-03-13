import {cva, type RecipeVariantProps}  from "@/styled-system/css"

export const buttonStyle = cva({
  base: {
    cursor: "pointer",
    rounded: "0.5rem",
    p: "16px",
    transition: "all",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  variants: {
    variant: {
      default: {
        color: "white",
        bg: "blue.500",
        _hover: {
          bg: "blue.600"
        }
      },
      outline: {
        border: "2px solid black",
        color: "black",
        _hover: {
          transform: "translate(-4px,-4px)",
          boxShadow: "4px 4px 0 -1px token(colors.black)",
          rounded: "1rem"
        }
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>