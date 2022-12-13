import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  display: 'flex',
  justifyContent: 'center',
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$black',
  borderRadius: '$md',
  padding: '$3 $4',
  color: '$white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {})
