import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  trigger: ReactNode
  content: string
}

export function Tooltip({ trigger, content, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent {...props}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
