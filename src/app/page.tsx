import { Button } from "@/components/Button";
import {css} from "@/styled-system/css"

export default function Home() {
  return (
    <main>
      <h1 className={css({
        color: "blue.100"
      })}>Hello World</h1>

      <Button>
        <span>Click</span>
        <p>Me</p>
      </Button>

      <Button variant="black">
        <span>Click</span>
        <p>Me</p>
      </Button>
    </main>
  );
}
