import React, { Component, ComponentElement, ComponentClass } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { FromTo, finalizedMonth, generateDateData } from '../Utils/calendarUtils'
import { width, height } from '../Utils/valueUtils'

import DayNames from './DayNames'
import Header from './Header'

import {DayData} from '../Interface'

import { Base, Dotted, Disabled, Marked } from './Day'

interface IProps {

  markedDates: {
    [holder: string]: {
      type: 'dotted' | 'marked' | 'disabled' | 'base' | 'custom'
      color?: string
      disableTouch? : boolean
    }
  }

  // Enter Current Date
  currentDate: Date

  // Render Extra Days
  showExtraDays?: boolean

  // Return data of the pressed date
  dayPress: (data: DayData) => void

  // Configure the render names
  editName?: {
    day?: string[],
    month?: string[],
    isZero?: boolean
  }

  // Custom styles
  customStyles?: {
    //others
    disableTextColor: string
    // Days Name Styles

    // Month Name Styles
  }
}

interface IState {

}

export default class App extends Component<IProps, IState> {

  // How to render the Date
  private dayComponent: (type: 'dotted' | 'marked' | 'disabled' | 'base' | 'custom') => ComponentClass<any, any>

  constructor(props: IProps) {
    super(props)

    this.dayComponent = (type: 'dotted' | 'marked' | 'disabled' | 'base' | 'custom') => {
      switch (type) {
        case 'dotted':
          return Dotted
        case 'marked':
          return Marked
        case 'disabled':
          return Disabled
        case 'custom':
          return Marked
        default:
          return Base
      }
    }
  }


  renderDays(currentDate: Date): ComponentElement<any, any> {
    const { editName, markedDates, dayPress } = this.props
    let container = [];
    let myDay = currentDate || new Date()
    let isShow = this.props.showExtraDays || false


    container = finalizedMonth(myDay, FromTo(myDay)).map((val, index) => {

      let type: any = markedDates[generateDateData(val).dateString]
      let Day = this.dayComponent(type ? type.type : 'base')

      if (generateDateData(currentDate).month !== generateDateData(val).month) {
        if (isShow) {
          return <View key={index} style={styles.textWrapper}>
            <Text style={{color:'#D6D5D5'}}>{generateDateData(val).day}
            </Text>
          </View>
        }
        return <View key={index} style={styles.textWrapper} />
      }

      else

        return <Day
          key={index}
          dayPress={dayPress} dayData={generateDateData(val)}
          markedDate={markedDates[generateDateData(val).dateString] || {}}
          renderZero={editName && editName.isZero}
        />
    })
    return (<View style={styles.allDaysThisMonth}>
      {container}
    </View>
    )
  }


  render({ editName, currentDate } = this.props) {

    return (
      <View style={styles.container}>
        <View style={styles.cover}>
          <Header month={generateDateData(currentDate).month}
            monthNames={editName && editName.month}
            year={generateDateData(currentDate).year}
          />
          <DayNames
            dayNames={editName && editName.day}
          />
          {this.renderDays(currentDate)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  daysName: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20
  },
  allDaysThisMonth: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 0,
    flexWrap: 'wrap',

  },
  cover: {
    marginHorizontal: 15,
    alignItems: 'center',
  },

  textDisabled: {
    color: 'gray'
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 30) / 7,
    paddingVertical: 0,
    height: 50
  }
});
