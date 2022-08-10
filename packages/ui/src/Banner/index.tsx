import React from 'react'
import { Image } from 'react-native'
import {  Stack, StackPropsBase } from 'tamagui'

type BannerProps = StackPropsBase & {
  imageSrc: string
  width: number
  height: number
}

function Banner(props: BannerProps) {
  const { width, height, imageSrc, ...restProps } = props
  return (
    <Stack flex={1} borderRadius={15} overflow="hidden" cursor="pointer" {...restProps}>
      <Image
        source={{ uri: imageSrc }}
        style={{
          height: height,
          width: '100%',
          resizeMode: 'cover',
        }}
      />
    </Stack>
  )
}

export { Banner }
