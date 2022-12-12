import { ComponentProps, ReactNode } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <>
      <ToastRoot {...props} open={true}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose />
      </ToastRoot>
      <ToastViewport />
    </>
  )
}

export function ToastProvider(children: ReactNode) {
  return <RadixToast.Provider>{children}</RadixToast.Provider>
}
