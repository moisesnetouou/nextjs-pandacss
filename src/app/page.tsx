import { Button } from "@/components/Button";
import {css} from "@/styled-system/css"
import * as Input from "@/components/Form/Input"

export default function Home() {
  return (
    <main className={css({
      h: "screen",
      display: "flex",
      bg: "#E1E8F3",
    })}>
     <form className={css({
      rounded: "0.5rem",
      border: "1px solid token(colors.gray.300)",
      w: "350px",
      p: "24px",
      background: "white",
      m: "auto",
      gap: "16px",
      display: "flex",
      flexDir: "column",
      shadow: "xs"
     })}>
      <Input.Root>
        <Input.PrefixText>
          Nome
        </Input.PrefixText>

        <Input.Control type="text" placeholder="Moisés Neto" />
      </Input.Root>

      <Input.Root>
        <Input.PrefixText>
          Email
        </Input.PrefixText>

        <Input.Control type="email" placeholder="moises@email.com" />
      </Input.Root>

      <Button>
        Enviar
      </Button>
     </form>
    </main>
  );
}
