"use client"

import * as Input from "@/components/Form/Input"
import {css} from "@/styled-system/css"
import { Button } from "../Button"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, loginSchema } from "./schema"
import { LoaderCircle } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"

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
    formState: {errors},
    reset
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<LoginSchema> = async(data) => {
    setIsLoading(true)
    const promise = (): Promise<LoginSchema> => new Promise((resolve) => setTimeout(() => resolve({
      name: "Moisés Neto", email: "moises@email.com"
    }), 2000));

    toast.promise(promise, {
      loading: 'Loading...',
      success: (data: LoginSchema) => {
        setIsLoading(false);
        reset()
        console.log(data)
        return `${data.name} conseguiu fazer o login!`;
      },
      error: 'Error',
    });
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

      <Button variant="outline" disabled={isLoading}>
        {isLoading ? (
          <LoaderCircle className={css({
            animation: "rotate 1s linear infinite",
            m: "auto"
          })} />
        ): (
          <span>Entrar</span>
        )}
      </Button>
     </form>
  )
}