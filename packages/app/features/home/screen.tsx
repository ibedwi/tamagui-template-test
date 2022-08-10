import React from 'react'
import {
  YStack,
  Navbar,
  RecommendationCard,
  Layout,
  Banner,
  Paragraph,
  useMedia,
  H3,
  H4,
  XStack,
  Stack,
  MenuButton,
  FeatureCard,
  H5,
} from '@my/ui'
import { Dimensions, SafeAreaView, ScrollView, Image } from 'react-native'
import { RUANG_BELAJAR_MENU, TOP_FEATURE } from 'app/assets'

const BANNER_IMAGE =
  'https://imgix3.ruangguru.com/assets/homepage/web/banner-large-dafa-lulu.png?convert=webp'

export function HomeScreen() {
  const deviceWidth = Dimensions.get('window').width
  const media = useMedia()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#F3F5FF' }}>
        <YStack
          space
          maw={'100%'}
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

              <YStack px="$3" pt="$3" pb="$2" space="$2" backgroundColor="$white">
                <Image
                  source={{ uri: 'https://imgix3.ruangguru.com/assets/homepage/logorubel.png' }}
                  style={{ height: 24, width: 130, resizeMode: 'contain' }}
                />
                <XStack flexWrap="wrap" space="$2" backgroundColor="$white">
                  {RUANG_BELAJAR_MENU.map((menu) => (
                    <MenuButton key={menu.name} name={menu.name} iconLink={menu.iconLink} />
                  ))}
                </XStack>
              </YStack>

              <YStack px="$3" pt="$3" pb="$4" space="$2" backgroundColor="$white">
                <Paragraph fontSize={15} fontWeight="bold">
                  Fitur Unggulan
                </Paragraph>
                <ScrollView horizontal={true}>
                  {TOP_FEATURE.map((menu) => (
                    <FeatureCard key={menu.name} imageSrc={menu.imageLink} mr="$2" />
                  ))}
                </ScrollView>
              </YStack>
            </Layout>
          </YStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}
