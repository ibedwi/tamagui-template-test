import { Variable } from '@tamagui/core'

const colorTokens = {
  seagreen: {
    0: '#F6FAFA',
    10: '#EDF7F8',
    20: '#DEF3F5',
    30: '#C7EDF0',
    40: '#A9E4E9',
    50: '#85D7DF',
    60: '#5FC8D2',
    70: '#3CB6C1',
    80: '#20A4B0',
    90: '#13939E',
    100: '#076A73',
  },
  // orange: {
  //   0: '#FAF7F6',
  // },
}

const lightColor = {
  ...colorTokens.seagreen,
}

const allColors = {
  ...postfixObjKeys(lightColor, ''),
}

function makeColors<A extends { [key: string]: Variable<string> | string }>(
  obj
): { [key: string]: Variable<string> | string } {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])) as any
}

function postfixObjKeys<A extends { [key: string]: Variable<string> | string }, B extends string>(
  obj: A,
  postfix: B
): {
  [Key in `${keyof A extends string ? keyof A : never}${B}`]: Variable<string> | string
} {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])) as any
}

export { allColors }
