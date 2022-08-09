import { Card, CardProps, Paragraph, Image, Stack, StackPropsBase } from 'tamagui'

type BannerProps = StackPropsBase & {
  imageSrc: string
  width: number
  height: number
}

function Banner(props: BannerProps) {
  const { width, height, imageSrc, ...restProps } = props
  return (
    <Stack flex={1} borderRadius={15} overflow="hidden" cursor="pointer" {...restProps}>
      <Image height={height} width={width} src={imageSrc} />
    </Stack>
  )
}

export { Banner }
