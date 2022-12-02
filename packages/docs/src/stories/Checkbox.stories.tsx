import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  // Podemos passar um JSX para ter decoradores na documentação, o Story é o conteúdo do Story em si
  // assim podemos colocar uma div em volta dele por exemplo
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
