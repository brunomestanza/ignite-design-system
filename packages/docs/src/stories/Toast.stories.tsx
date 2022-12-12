import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProvider, ToastProps } from '@mestanza-ignite-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Example title',
    description: 'Example description',
  },
  decorators: [
    (Story) => {
      return <ToastProvider>{Story()}</ToastProvider>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
