import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@mestanza-ignite-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/brunomestanza.png',
    alt: 'Bruno Mestanza',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
