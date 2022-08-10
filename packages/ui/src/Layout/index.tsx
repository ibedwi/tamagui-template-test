import React from 'react'
import { styled, YStack } from 'tamagui'

const Layout = styled(YStack, {
  width: '100%',
  alignSelf: 'center',
  $gtMd: {
    width: 1020,
    maxWidth: 1020,
  },
})

export { Layout }
