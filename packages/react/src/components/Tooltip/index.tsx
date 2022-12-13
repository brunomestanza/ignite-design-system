import { ComponentProps, ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  trigger: ReactNode
  content: string
}

export function Tooltip({ trigger, content, ...props }: TooltipProps) {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent {...props}>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  )
}

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <RadixTooltip.Provider>{children}</RadixTooltip.Provider>
}

Tooltip.displayName = 'Tooltip'
