import {
  YStack,
  Input,
  PlaceCard,
  Navbar,
  SearchInput,
  RecommendationCard,
  Layout,
  Banner,
} from '@my/ui'
import React from 'react'
import { H3, H4, XStack } from 'tamagui'
import { ScrollView } from 'react-native'

const BANNER_IMAGE =
  'https://imgix3.ruangguru.com/assets/homepage/web/banner-large-dafa-lulu.png?convert=webp'
export function HomeScreen() {
  return (
    <YStack
      f={1}
      space
      maw={'100vw'}
      jc="flex-start"
      ai="stretch"
      backgroundColor={'$whiteBackground'}
    >
      <YStack f={1} space justifyContent={'space-between'} jc={'flex-start'}>
        <Navbar />

        <Layout space={'$2'}>
          <YStack
            space={'$2'}
            px={'$3'}
            py={'$2'}
            backgroundColor={'$seagreen20'}
            borderRadius={10}
          >
            <H4>Penawaran spesial terbatas!</H4>
            <ScrollView horizontal={true}>
              <RecommendationCard />
              <RecommendationCard />
              <RecommendationCard />
              <RecommendationCard />
              <RecommendationCard />
            </ScrollView>
          </YStack>

          <Banner width={1020} height={100} imageSrc={BANNER_IMAGE} />
        </Layout>
      </YStack>
    </YStack>
  )
}
