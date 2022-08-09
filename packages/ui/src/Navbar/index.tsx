import { XStack, H4, Paragraph } from 'tamagui'
import { Button } from '../Button'

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
        <Button type={'secondary'}>Masuk / Daftar</Button>
        <Button type={'primary'}>Langganan Sekarang</Button>
      </XStack>
    </XStack>
  )
}
