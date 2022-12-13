import type { StoryObj, Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipProvider,
  TooltipProps,
} from '@mestanza-ignite-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    trigger: (
      <p
        style={{ backgroundColor: 'white', width: '300px', marginTop: '40px' }}
      >
        Hover here
      </p>
    ),
    content: 'Example content',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return <TooltipProvider>{Story()}</TooltipProvider>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
