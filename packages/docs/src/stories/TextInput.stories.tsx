import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@mestanza-ignite-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  // Podemos passar um JSX para ter decoradores na documentação, o Story é o conteúdo do Story em si
  // assim podemos colocar uma div em volta dele por exemplo
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
