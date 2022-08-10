import React from 'react'
import { Input, Paragraph, Text, XStack, Stack } from 'tamagui'

function SearchInput() {
  return (
    <Stack
      flexDirection="column"
      backgroundColor="$white"
      px="$2"
      py="$2"
      borderTopLeftRadius={15}
      borderTopRightRadius={15}
      $gtMd={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <XStack p="$2" $gtMd={{ flex: 2 }}>
        <Input
          size="$4"
          placeholder={'Coba cari materi belajarmu di sini'}
          w="100%"
          borderRadius={100}
        />
      </XStack>
      <XStack
        space="$2"
        alignItems="center"
        p="$2"
        justifyContent="center"
        $gtMd={{ justifyContent: 'flex-end' }}
      >
        <Paragraph>Pilih kelas</Paragraph>
        <Stack
          px="$3"
          py="$2"
          backgroundColor="$orange20"
          borderWidth={1}
          borderRadius={10}
          borderColor="$orange50"
        >
          <Paragraph ellipse={true}>Kelas 1 - Pembelajaran Tematik</Paragraph>
        </Stack>
      </XStack>
    </Stack>
  )
}

export { SearchInput }
