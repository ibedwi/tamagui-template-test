import React from 'react'
import { Paragraph, YStack, useMedia } from 'tamagui'
import { Image, Dimensions } from 'react-native'

type MenuButtonProps = {
  name: string
  iconLink: string
}
function MenuButton(props: MenuButtonProps) {
  const smallWidth = Dimensions.get('screen').width * 0.28
  return (
    <YStack
      width={smallWidth}
      height={120}
      $gtMd={{
        width: 125,
      }}
      px="$2"
      py="$3"
      alignItems="center"
      justifyContent="flex-start"
      space="$1"
      borderWidth={1}
      borderRadius={10}
      borderColor="$cloudy60"
      mb="$2"
    >
      <Image
        source={{ uri: props.iconLink }}
        style={{ height: 48, width: 48, resizeMode: 'contain' }}
      />
      <Paragraph textAlign="center" fontSize="$2" lineHeight={16}>
        {props.name}
      </Paragraph>
    </YStack>
  )
}

export { MenuButton }
