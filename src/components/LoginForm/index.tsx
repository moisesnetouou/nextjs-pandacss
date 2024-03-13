"use client"

import * as Input from "@/components/Form/Input"
import {css} from "@/styled-system/css"
import { Button } from "../Button"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, loginSchema } from "./schema"

const formStyle = css({
  rounded: "0.5rem",
  border: "1px solid token(colors.black/80)",
  w: "350px",
  p: "24px",
  background: "white",
  m: "auto",
  gap: "24px",
  display: "flex",
  flexDir: "column",
  shadow: "xs"
})

export function LoginForm(){
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log(data)
  }

  return(
    <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
      <div className={css({display: "flex", flexDir: "column" ,gap: "0.5rem" })}>
        <Input.Root isError={!!errors.name?.message}>
          <Input.PrefixText isError={!!errors.name?.message} isRequired>
            Nome
          </Input.PrefixText>

          <Input.Control type="text" placeholder="Insira seu nome" {...register("name")} />
        </Input.Root>

        <Input.Root isError={!!errors.email?.message} >
          <Input.PrefixText isError={!!errors.email?.message} isRequired>
            Email
          </Input.PrefixText>

          <Input.Control type="email" placeholder="moises@email.com" {...register("email")} />
        </Input.Root>
      </div>

      <Button variant="outline">
        Entrar
      </Button>
     </form>
  )
}