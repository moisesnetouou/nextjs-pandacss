import { sva, type RecipeVariantProps } from "@/styled-system/css";

export const inputStyle = sva({
  slots: ["root", "prefixText", "control"],
  base: {
    root: {
      display: "flex",
      flexDir: "column",
      gap: "0.25rem",
      rounded: "0.5rem",
      outline: "1px solid token(colors.purple.500)",
      bg: "white",
      p: "1rem",
      _focusWithin: {
        outline: "2px solid token(colors.blue.600)"
      }
    },
    prefixText: {
      fontSize: "12px",
      lineHeight: "20px",
      color: "gray.700",
      fontWeight: 600,
    },
    control: {
      fontSize: "0.875rem",
      color: "blue.500",
      fontWeight: 500,
      outline: "none",
      _placeholder: {
        color: "gray.400",
        fontWeight: 400
      }
    }
  },
  variants: {
    isError: {
      true: {
        root: {
          outline: "1px solid #CC0031",
          _focusWithin: {
            outline: "2px solid #CC0031"
          },
        },
        prefixText: {
          color: "#CC0031"
        },
        control: {
          color: "gray.800"
        }
      }
    }
  }
})

export type InputVariants = RecipeVariantProps<typeof inputStyle>