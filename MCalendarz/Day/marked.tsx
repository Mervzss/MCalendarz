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
  markedDate: { color?: string, fontColor?: string, disableTouch?: boolean }
  dayPress: (data: DayData) => void,
  renderZero? : boolean
}

interface IState {
}

export class DayMarked extends Component<IProps, IState>{

  constructor(props: IProps) {
    super(props)
  }

  onClickDay() {
    this.props.dayPress(this.props.dayData)
  }

  render({color, fontColor, disableTouch} = this.props.markedDate) {
    let renderFinal = !disableTouch ? (
      <TouchableOpacity onPress={this.onClickDay.bind(this)} style={[styles.textWrapper]}>
        <View style={[styles.radiStyle, { backgroundColor: color || 'blue' }]}>
          <Text style={[styles.textStyle, {color: fontColor}]}>
            { this.props.renderZero ? pad(typeof this.props.dayData.day === 'string' ? parseInt(this.props.dayData.day) : this.props.dayData.day) : this.props.dayData.day }
          </Text>
        </View>

      </TouchableOpacity>
    ) :
    (
      <View style={[styles.textWrapper]}>
        <View style={[styles.radiStyle, { backgroundColor: color || 'blue' }]}>
          <Text style={[styles.textStyle, {color: fontColor}]}>
            { this.props.renderZero ? pad(typeof this.props.dayData.day === 'string' ? parseInt(this.props.dayData.day) : this.props.dayData.day) : this.props.dayData.day }
          </Text>
        </View>

      </View>
    )

    return renderFinal
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
  markedWrapper: {
    width: (width - 30) / 7,
    paddingVertical: 0,
    height: 50
  },
  radiStyle: {
    width: (width - 30) / 9,
    height: (width - 30) / 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
  },
  textStyle: {
    fontSize: 14
  }
})