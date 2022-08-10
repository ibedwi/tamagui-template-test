import React from 'react'
import { Image } from 'react-native'
import { XStack, H4, Paragraph, useMedia } from 'tamagui'
import { Button } from '../Button'

export const Navbar = () => {
  const media = useMedia()
  return (
    <XStack
      justifyContent={'space-between'}
      backgroundColor={'$white'}
      py={'$3'}
      px={'$4'}
      width="100%"
      maxWidth="100%"
    >
      <XStack space={'$2'}>
        <Image
          source={{
            uri: 'https://cdn-web.ruangguru.com/homepage-web/public/assets/images/logo.png',
          }}
          style={{
            height: 50,
            width: 50,
          }}
          resizeMode="contain"
        />
      </XStack>

      <XStack space={'$2'}>
        <Button type={'secondary'} color="$black">
          Masuk / Daftar
        </Button>

        {media['gtLg'] && (
          <Button type={'primary'} onPress={() => console.log('langganan')}>
            Langganan Sekarang
          </Button>
        )}
      </XStack>
    </XStack>
  )
}
