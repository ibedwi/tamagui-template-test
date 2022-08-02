import { Button, Card, CardProps, H2, H3, Image, Paragraph, XStack } from 'tamagui'
import { Dimensions, Platform } from 'react-native'

export const PlaceCard = (props: CardProps) => {
  const dimensions = Dimensions.get('window')
  const imageWidth = Platform.OS === 'web' ? '100%' : dimensions.width

  const IMAGE_LINK =
    'https://images.unsplash.com/photo-1573471584109-479cc6696e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80'
  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>Norwegia</H2>
        <Paragraph theme="alt2">Now available {imageWidth}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack f={1} />
        <Button br="$10">Purchase</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          pos="absolute"
          // @ts-ignore
          width={imageWidth}
          height={500}
          resizeMode="cover"
          src={IMAGE_LINK}
        />
      </Card.Background>
    </Card>
  )
}
