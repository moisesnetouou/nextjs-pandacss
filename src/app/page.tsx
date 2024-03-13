import { LoginForm } from "@/components/LoginForm";
import {css} from "@/styled-system/css"

export default function Home() {
  return (
    <main className={css({
      h: "screen",
      display: "flex",
      bg: "black/90",
    })}>
      <LoginForm />
    </main>
  );
}
