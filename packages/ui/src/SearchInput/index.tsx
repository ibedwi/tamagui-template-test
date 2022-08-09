import { Input, Paragraph, Text, XStack } from 'tamagui'
import { Button } from '../Button'

function SearchInput() {
  return (
    <XStack>
      <XStack>
        <Input size="$4" borderWidth={2} placeholder={'Coba cari materi belajarmu di sini'} />
      </XStack>
      <XStack>
        <Paragraph>Pilih kelas</Paragraph>
        <Button>Kelas 1 - Pemeblajaran Tematik</Button>
      </XStack>
    </XStack>
  )
}

export { SearchInput }
