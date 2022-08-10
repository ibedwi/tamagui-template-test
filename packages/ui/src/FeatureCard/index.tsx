import React from 'react'
import { Image } from 'react-native'
import { Stack, StackPropsBase } from 'tamagui'

type FeatureCardProps = StackPropsBase & {
  imageSrc: string
}

function FeatureCard(props: FeatureCardProps) {
  const { imageSrc, ...restProps } = props
  return (
    <Stack
      borderRadius={15}
      overflow="hidden"
      cursor="pointer"
      height={76}
      width={260}
      backgroundColor="$white"
      {...restProps}
    >
      <Image
        source={{ uri: imageSrc }}
        style={{
          height: 76,
          width: '100%',
          resizeMode: 'cover',
        }}
      />
    </Stack>
  )
}

export { FeatureCard }
