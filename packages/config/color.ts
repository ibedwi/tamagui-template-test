// Taken from RG Design System
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
  gray: {
    0: '#FCFCFC',
    10: '#FBFBFB',
    20: '#FAFAFA',
    30: '#F4F4F4',
    40: '#EAEAEA',
    50: '#DBDBDB',
    60: '#C7C7C7',
    70: '#ACACAC',
    80: '#8F8F8F',
    90: '#858585',
    100: '#7B7B7B',
    110: '#424242',
  },
  cloudy: {
    0: '#FCFCFC',
    10: '#FBFBFB',
    20: '#F9F9FA',
    30: '#F0F1F4',
    40: '#E2E5EA',
    50: '#CFD3DB',
    60: '#B5BBC7',
    70: '#979EAC',
    80: '#79808F',
    90: '#667085',
    100: '#5E677B',
    110: '#333842',
  },
  orange: {
    0: '#FAF7F6',
    10: '#FAF3EE',
    20: '#FAEADF',
    30: '#F9DDC9',
    40: '#F9CBAB',
    50: '#F8B586',
    60: '#F69C5D',
    70: '#F48333',
    80: '#F26D0F',
    90: '#D75E09',
    100: '#BC5004',
    110: '#240F00',
  },
  green: {
    0: '#F6FAF6',
    10: '#F0F9F0',
    20: '#E5F6E5',
    30: '#D3F1D4',
    40: '#BDEABE',
    50: '#A1E0A3',
    60: '#82D286',
    70: '#82D286',
    80: '#4CAF50',
    90: '#3B9D3F',
    100: '#2C8C30',
    110: '#0B290C',
  },
  blue: {
    0: '#F6F8FA',
    10: '#EEF4FA',
    20: '#E0EEFA',
    30: '#CCE4F9',
    40: '#B0D8F9',
    50: '#8EC8F8',
    60: '#69B7F6',
    70: '#42A5F5',
    80: '#2196F3',
    90: '#1480D9',
    100: '#096BBF',
    110: '#00182E',
  },
  indigo: {
    0: '#F6F6FA',
    10: '#F1F2F9',
    20: '#E7E9F8',
    30: '#D8DCF7',
    40: '#C5CBF4',
    50: '#ADB6F1',
    60: '#929FED',
    70: '#7787E7',
    80: '#6073E2',
    90: '#495CCB',
    100: '#3547B4',
    110: '#0C1133',
  },
  purple: {
    0: '#F9F6FA',
    10: '#F7F0F9',
    20: '#F3E4F6',
    30: '#EDD3F3',
    40: '#E5BDEE',
    50: '#DAA2E7',
    60: '#CE84DD',
    70: '#BF67D2',
    80: '#B14EC6',
    90: '#9C3AB1',
    100: '#88299D',
    110: '#230829',
  },
  yellow: {
    0: '#FAF9F6',
    10: '#FAF7EE',
    20: '#FAF4E0',
    30: '#FAEFCB',
    40: '#FAE8AF',
    50: '#FBE08D',
    60: '#FBD666',
    70: '#FBCD3E',
    80: '#FCC41B',
    90: '#E0B11F',
    100: '#C49D20',
    110: '#292108',
  },
  red: {
    0: '#FAF6F6',
    10: '#F9EEEF',
    20: '#F8E1E2',
    30: '#F7CDCF',
    40: '#F5B2B6',
    50: '#F29197',
    60: '#EE6D74',
    70: '#EA4952',
    80: '#E52A34',
    90: '#CF1924',
    100: '#B80B16',
    110: '#330003',
  },
}
const neutralColorTokens = {
  white: '#FFFFFF',
  black: '#000000',
}
type ColorTokensObject = {
  [key: string]: {
    [key: number]: string
  }
}

/**
 * Generate color tokens that accepted by Tamagui `createTamagui`
 * function
 */
function makeColor(obj: ColorTokensObject) {
  const result = Object.entries(obj).map(([colorKey, colorShades]) => {
    const mapped = Object.entries(colorShades).map((k) => [`${colorKey}${k[0]}`, k[1]])
    return Object.fromEntries(mapped)
  })

  const newOb = result.reduce((previousValue, currentValue) => {
    return {
      ...previousValue,
      ...currentValue,
    }
  }, {})

  return newOb
}

const allColors = {
  ...makeColor(colorTokens),
  ...neutralColorTokens,
}

export { allColors }
