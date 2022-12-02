import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@mestanza-ignite-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Form/Text Area',
  component: TextArea,
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
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
