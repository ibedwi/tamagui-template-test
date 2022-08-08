import { Text, XStack, H4, Paragraph, Button } from 'tamagui'

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
        <Button>Langganan</Button>
      </XStack>
    </XStack>
  )
}
