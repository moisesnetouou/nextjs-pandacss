import { Button } from "@/components/Button";
import {css} from "@/styled-system/css"
import * as Input from "@/components/Form/Input"

export default function Home() {
  return (
    <main className={css({
      h: "screen",
      display: "flex",
      bg: "gray.900"
    })}>
     <form className={css({
      rounded: "0.5rem",
      border: "1px solid token(colors.gray.300)",
      w: "350px",
      p: "24px",
      background: "gray.400/30",
      m: "auto",
      gap: "16px",
      display: "flex",
      flexDir: "column"
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
