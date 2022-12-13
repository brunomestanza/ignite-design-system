import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastRoot = styled(Toast.Root, {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray800',
  border: '3px solid $gray600',
  gap: '$1',
  padding: '$5 $3',
  borderRadius: '$sm',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const ToastTitle = styled(Toast.Title, {})

export const ToastDescription = styled(Toast.Description, {})

export const ToastClose = styled(Toast.Close, {
  width: 'fit-content',
  color: '$white',
})

export const ToastViewport = styled(Toast.Viewport, {})
