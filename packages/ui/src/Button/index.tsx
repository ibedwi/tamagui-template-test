import { ButtonFrame, GetProps, Stack, styled } from 'tamagui'

type RGButtonProps = GetProps<typeof RGButton>

export const RGButton = styled(ButtonFrame, {
  // backgroundColor: '$orange',
  variants: {
    type: {
      primary: {
        backgroundColor: '$orange80',
        color: '$white',
        hoverStyle: {
          backgroundColor: '$orange100',
        },
      },
      secondary: {
        backgroundColor: 'black',
        color: '$white',
      },
    },
    size: {
      lg: {
        height: 44,
        padding: 16,
        borderRadius: 136,
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})

export const Button = (props: RGButtonProps) => {
  return <RGButton {...props} />
}
// export const Circle = styled(Stack, {
//   borderRadius: 100_000_000,
//
//   variants: {
//     pin: {
//       top: {
//         position: 'absolute',
//         top: 0,
//       },
//     },
//
//     centered: {
//       true: {
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//     },
//
//     size: {
//       '...size': (size, {tokens}) => {
//         return {
//           width: tokens.size[size] ?? size,
//           height: tokens.size[size] ?? size,
//         }
//       },
//     },
//   },
// })

// const Component = () => {
//   return (
//     <>
//       <Button backgroundColor={'$orange'}/>
//       <Circle pin={'top'}/>
//     </>
//   )
// }
