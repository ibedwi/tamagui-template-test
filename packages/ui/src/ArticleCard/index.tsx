import React from 'react'
import { Image } from 'react-native'
import { Paragraph, Stack, StackPropsBase } from 'tamagui'

type ArticleCardProps = StackPropsBase & {
  imageSrc: string
  title: string
}

function ArticleCard(props: ArticleCardProps) {
  const { imageSrc, ...restProps } = props
  return (
    <Stack
      borderRadius={15}
      overflow="hidden"
      cursor="pointer"
      height={150}
      width={160}
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
      <Stack p="$2">
        <Paragraph ellipse={true} maxWidth="100%">
          {props.title}
        </Paragraph>
      </Stack>
    </Stack>
  )
}

export { ArticleCard }
