import {Dimensions} from 'react-native'

export function pad(value: number): string {
  if (value < 10) return '0' + value
  return '' + value
}

export const { width, height } = Dimensions.get('window')