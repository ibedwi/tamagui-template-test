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
  SearchInput,
  ArticleCard,
  LinearGradient,
} from '@my/ui'
import { Dimensions, SafeAreaView, ScrollView, Image } from 'react-native'
import { RUANG_BELAJAR_MENU, TOP_FEATURE, ARTICLE } from 'app/assets'

const BANNER_IMAGE =
  'https://imgix3.ruangguru.com/assets/homepage/web/banner-large-dafa-lulu.png?convert=webp'

export function HomeScreen() {
  const deviceWidth = Dimensions.get('window').width
  const media = useMedia()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#F3F5FF' }}>
        <YStack maw={'100%'} jc="flex-start" ai="stretch" backgroundColor={'$whiteBackground'}>
          <Navbar />
          <YStack f={1} justifyContent={'space-between'} jc={'flex-start'} position="relative">
            <LinearGradient
              als="center"
              width={'100%'}
              height={200}
              colors={['#6753CA', '#3B9DAE']}
              start={[1, 0]}
              borderBottomLeftRadius="$3"
              borderBottomRightRadius="$3"
              end={[0, 1]}
            />
            <Layout space={'$4'} zIndex={10} position="absolute" top={10} pt={'$4'}>
              <YStack px="$4">
                <H4 color="$white">Hi Squad</H4>
                <Paragraph color="$white">mau belajar apa hari ini?</Paragraph>
              </YStack>
              <SearchInput />
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

              <YStack px="$3" pt="$3" pb="$4" space="$2">
                <Paragraph fontSize={15} fontWeight="bold">
                  Perluas wawasanmu dengan baca artikel
                </Paragraph>
                <ScrollView horizontal={true} style={{ paddingBottom: 10 }}>
                  {ARTICLE.map((menu) => (
                    <ArticleCard
                      key={menu.name}
                      imageSrc={menu.imageLink}
                      mr="$2"
                      title={menu.name}
                    />
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
