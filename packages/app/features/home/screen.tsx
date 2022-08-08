import { YStack, Input, PlaceCard, Navbar, SearchInput, RecommendationCard } from '@my/ui'
import React from 'react'

export function HomeScreen() {
  return (
    <YStack f={1} space pt="$2" px="$2" maw={'100vw'} jc="flex-start" ai="stretch" p="$4">
      <YStack f={1} space justifyContent={'space-between'} jc={'flex-start'}>
        <Navbar />
        <RecommendationCard />
        <SearchInput />
        {/*<YStack space="$4" maw={600}>*/}
        {/*  <Input size="$4" borderWidth={2} placeholder="Cari lokasi" />*/}
        {/*  <PlaceCard />*/}
        {/*  <PlaceCard />*/}
        {/*  <PlaceCard />*/}
        {/*  <PlaceCard />*/}
        {/*</YStack>*/}
      </YStack>
    </YStack>
  )
}
