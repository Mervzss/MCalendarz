import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, FlatList} from 'react-native'

import MCalendarz from '../MCalendarz'
import {baseDate} from '../Utils/dateUtils'

import {DayData} from '../Interface'
import { width } from '../Utils/valueUtils';

interface IProps{
  markedDates: {
    [holder: string]: {
      type: 'dotted' | 'marked' | 'disabled' | 'base' | 'custom'
      color?: string
      disableTouch? : boolean
    }
  }


  laterRange : number
  futureRange : number
  currentDate : Date

  dayPress: (data : DayData) => void

  showExtraDays?: boolean
  
  editName?: {
    day?: string[],
    month?: string[],
    isZero?: boolean
  }
} 

interface IState{

}

interface IData{
  dates : Date, marks : {}
}

export default class MCalendarListz extends Component<IProps, IState>{

  private calendarData : Date[]

  constructor(props: IProps){
    super(props)

    this.calendarData = []
  }

  passData() : any{
    let x = 0
    const { laterRange, futureRange, currentDate } = this.props
    let f = baseDate(currentDate)
    let year = f[0]
    let month = f[1] - laterRange
    let scale = laterRange + futureRange + 1
    let a , b
    if( laterRange >= 12 ){
      a = laterRange % 12 
      b = Math.floor(laterRange / 12)
      year = year - b
      month = month - a 
    }

    do{

      this.calendarData.push( new Date(year, month , 1))
      x ++;
      month ++;
      
    }while(x < scale)

  }


  render(){
    this.passData()
    return (
      <FlatList
      data={this.calendarData}
      renderItem={({item}) =>(
        <MCalendarz 
        currentDate={item} 
        dayPress={this.props.dayPress} 
        markedDates={this.props.markedDates}
        showExtraDays={this.props.showExtraDays}
        editName={this.props.editName}
        />
      )}
      keyExtractor={(item) => item.toDateString()}
      contentOffset={{x:0, y:((width * .7) * this.props.laterRange) + (width + 120)}}
      />

    )
  }
}

const styles = StyleSheet.create({

})