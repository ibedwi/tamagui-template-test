import { Text, XStack, H4, Paragraph, Button } from 'tamagui'
import { RGButton } from '../Button'

export const Navbar = () => {
  return (
    <XStack justifyContent={'space-between'}>
      <XStack space={'$2'}>
        <H4 color={'$seagreen0'}>Ruangguru</H4>
        <Paragraph>ruangbelajar</Paragraph>
        <Paragraph>Brainacademy</Paragraph>
        <Paragraph>Roboguru</Paragraph>
      </XStack>

      <XStack>
        <Button backgroundColor={'$orange50'}>Langganan</Button>
        <RGButton type={'primary'}>Langganan Sekarang</RGButton>
      </XStack>
    </XStack>
  )
}
