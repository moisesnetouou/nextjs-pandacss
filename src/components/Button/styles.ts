import {cva, type RecipeVariantProps}  from "@/styled-system/css"

export const buttonStyle = cva({
  base: {
    cursor: "pointer",
    "& span": {
      color: "red.400",
      _hover: {
        color: "blue.600"
      }
    },
    "& p": {
      display: "inline",
      ml: "0.5rem",
      color: "red.900"
    },
  },
  variants: {
    variant: {
      black: {
        background: "black"
      },
      blue: {
        background: "blue.700"
      }
    }
  },
  defaultVariants: {
    variant: "blue"
  }
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>