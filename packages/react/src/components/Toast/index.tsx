import { ComponentProps, ReactNode } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastDescription,
  Header,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <>
      <ToastRoot {...props} open>
        <Header>
          <ToastTitle asChild>
            <Heading size="sm">{title}</Heading>
          </ToastTitle>
          <ToastClose asChild>
            <X size={24} weight="bold" />
          </ToastClose>
        </Header>
        <ToastDescription asChild>
          <Text size="sm">{description}</Text>
        </ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return <RadixToast.Provider>{children}</RadixToast.Provider>
}
