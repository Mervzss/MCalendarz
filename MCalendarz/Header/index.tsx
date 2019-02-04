import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

import { defaultMonthName } from '../../Locale'

interface IProps {
  month: number | string
  monthNames?: string[]
  year: string | number
}

export default function Header(props: IProps) {
  let val: any
  let year = props.year

  if (typeof props.month == 'string') val = parseInt(props.month)
  else val = props.month

  let month = (props.monthNames ?
    props.monthNames[val] :
    defaultMonthName[val] )


  return (
    <Text style={[styles.textStyle]}>
      {month} {year}
    </Text>
  )

}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18
  }
})