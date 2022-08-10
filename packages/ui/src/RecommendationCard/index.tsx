import React from 'react'
import { Image } from 'react-native'
import { Card, CardProps, Paragraph } from 'tamagui'

const imageSrc = 'https://imgix3.ruangguru.com/assets/miscellaneous/image_9fszuy_675.png'

function RecommendationCard(props: CardProps) {
  return (
    <Card size="$4" bordered width={300} height={142} m={'$2'} {...props}>
      <Card.Header padded>
        <Paragraph>Ruang belajar</Paragraph>
        <Paragraph theme="alt2">Now available</Paragraph>
      </Card.Header>
      <Card.Background>
        <Image
          resizeMode="cover"
          source={{ uri: imageSrc }}
          style={{
            position: 'absolute',
            width: 300,
            height: 142,
          }}
        />
      </Card.Background>
    </Card>
  )
}

export { RecommendationCard }
