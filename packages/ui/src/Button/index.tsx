import React from 'react'
import { ButtonFrame, GetProps, Stack, styled, SizableText } from 'tamagui'
import { resolveTextColor } from './Button.utils'

const RGButton = styled(ButtonFrame, {
  // fontFamily: '$body',
  variants: {
    type: {
      primary: {
        backgroundColor: '$orange80',
        color: '$white',
        hoverStyle: {
          backgroundColor: '$orange90',
        },
        pressStyle: {
          backgroundColor: '$orange100',
        },
      },
      secondary: {
        backgroundColor: '$white',
        borderWidth: 1,
        borderColor: '$cloudy60',
        color: '$black',
        hoverStyle: {
          backgroundColor: '$cloudy10',
          borderColor: '$cloudy60',
          borderWidth: 1,
        },
      },
      outline: {},
      ghost: {},
    },
    size: {
      lg: {
        minHeight: 44,
        borderRadius: 136,
        paddingLeft: 16,
        paddingRight: 16,
      },
      md: {
        minHeight: 36,
        borderRadius: 100,
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
  },

  defaultVariants: {
    type: 'primary',
    size: 'md',
  },
})

const RGButtonText = styled(SizableText, {
  color: '$color',
  selectable: false,
  cursor: 'inherit',
  flexGrow: 0,
  // flexShrink: 1,
  // ellipse: true,
  fontWeight: '$7',
  fontSize: 14,
})

type ButtonProps = GetProps<typeof RGButton> & {
  children: JSX.Element | string
  color?: string
}

export const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props

  const color = resolveTextColor(restProps.type)

  return (
    <>
      <RGButton {...restProps}>
        <RGButtonText color={color}>{children}</RGButtonText>
      </RGButton>
    </>
  )
}
