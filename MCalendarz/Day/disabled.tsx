// Properties //
// Key example 2019-20-01 // CallBack & Identifier
// Marked // Boolean , check if that given day is selected
// Style // Props style for the selected day
//

import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import {DayData} from '../../Interface'
import {pad} from '../../Utils/valueUtils'
import {width, height} from '../../Utils/valueUtils'

interface IProps {
  dayData: DayData
  markedDate: { color?: string }
  dayPress: (data: DayData) => void,
  disabledColor : string
  renderZero? : boolean
}

interface IState {
}

export class DayDisabled extends Component<IProps, IState>{

  constructor(props: IProps) {
    super(props)
  }

  render({markedDate: color, disabledColor} = this.props) {

    return (
      <View style={[styles.textWrapper,]}>
          <Text style={[styles.textStyle, {color: disabledColor || "#AFAFAF"}]}>
            { this.props.renderZero ? pad(typeof this.props.dayData.day === 'string' ? parseInt(this.props.dayData.day) : this.props.dayData.day) : this.props.dayData.day }
          </Text>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 30) / 7,
    paddingVertical: 0,
    height: 50
  },
  textStyle: {
    fontSize: 14,
  }
})