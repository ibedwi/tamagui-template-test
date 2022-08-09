import { XStack, H4, Paragraph } from 'tamagui'
import { Button } from '../Button'

export const Navbar = () => {
  return (
    <XStack justifyContent={'space-between'} backgroundColor={'$white'} py={'$3'} px={'$4'}>
      <XStack space={'$2'}>
        <H4>Ruangguru</H4>
        <Paragraph>ruangbelajar</Paragraph>
        <Paragraph>Brainacademy</Paragraph>
        <Paragraph>Roboguru</Paragraph>
      </XStack>

      <XStack space={'$2'}>
        <Button type={'secondary'}>Masuk / Daftar</Button>
        <Button type={'primary'} onPress={() => console.log('langganan')}>
          Langganan Sekarang
        </Button>
      </XStack>
    </XStack>
  )
}
