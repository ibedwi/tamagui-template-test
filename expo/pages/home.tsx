import { YStack, Input, PlaceCard } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export default function HomeScreen() {
  return (
    <YStack f={1} jc="flex-start" ai="stretch" space pt="$2" px="$2">
      <YStack space="$4" maw={600}>
        <Input size="$4" borderWidth={2} placeholder="Cari lokasi" />

        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </YStack>
    </YStack>
  )
}
