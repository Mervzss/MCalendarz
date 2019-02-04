/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import MCalendarz from './MCalendarz'
import MCalenderListz from './MCalendarListz'
import {DayData} from './Interface'

interface IProps{

}

interface IState{
  marks : any
}

const { width, height } = Dimensions.get('window')

// Local Configs



export default class App extends Component<IProps, IState> {


  constructor(props : IProps){
    super(props)
    this.state={
      marks :{}
    }
  }

  onPressDay(day: DayData){
    
    this.setState({
      marks : { [day.dateString]: {type: 'marked',color: 'green', disableTouch : false } }
    })
  }


  render() {
    let myDate1 = new Date(2019, 6, 4)
    let myDate2 = new Date(2019, 7, 4)
    let myDate3 = new Date(2019, 8, 4)
    return (
      // <ScrollView>
      //   {/* <MCalendarz dayPress={(data) => alert(data.dateString)} currentDate={myDate1} markedDates={{
      //     "2019-07-04": { type: 'marked'},
      //     "2019-07-06": { type: 'dotted', color: 'yellow'},  
      //     "2019-07-20":{type: 'disabled',color: 'blue'}, 
      //     "2019-07-21":{type: 'marked',color: 'green', disableTouch : false },
      //     "2019-07-31":{type: 'marked',color: 'yellow'},
      //     "2019-07-17": {type: 'dotted',color : 'transparent', disableTouch: false}
      //     }}
      //     showExtraDays= {true}
      //     editName={{
      //       month:["Q","R","S","T","U","V","W","X","Y","Z","Z","Z",],
      //       isZero: true
      //     }}
      //     />
      //     <MCalendarz dayPress={this.onPressDay.bind(this)} currentDate={myDate1} markedDates={this.state.marks}/>
      //     <MCalendarz dayPress={(data) => alert(data.dateString)} currentDate={myDate1} markedDates={{
      //     "2019-07-04": {type: 'marked',color : 'red'}, 
      //     "2019-07-20":{type: 'marked',color: 'blue'}, 
      //     "2019-07-21":{type: 'marked',color: 'green'},
      //     "2019-07-31":{type: 'marked',color: 'yellow'},
      //     "2019-07-17": {type: 'marked',color : 'pink'}
      //     }}
      //     editName={{
      //       day:["A", "A", "A", "A", "A", "A", "A" ],
      //       isZero: true
      //     }}
      //     /> */}
      //   <MCalendarz dayPress={(day : DayData) => alert(day.dateString)} currentDate={myDate2} markedDates={{ "2019-08-21":{type:'marked', color: 'green'},
      //     "2019-08-31":{type:'dotted', color: 'yellow'},}}
      //     showExtraDays= {true}/>
      //   {/* <MCalendarz currentDate={myDate3} markedDates={{}}/>
      //   <MCalendarz currentDate={myDate1} markedDates={{}}/>
      //   <MCalendarz currentDate={myDate2} markedDates={{}}/>
      //   <MCalendarz currentDate={myDate3} markedDates={{}}/>
      //   <MCalendarz currentDate={myDate1} markedDates={{}}/>
      //   <MCalendarz currentDate={myDate2} markedDates={{}}/> */}
      // </ScrollView>



      <MCalenderListz futureRange={10} laterRange={5} currentDate={new Date()} dayPress={(data) => alert(data.dateString)} showExtraDays={true}
      markedDates={{
        "2019-07-04": { type: 'marked'},
        "2019-07-06": { type: 'dotted', color: 'yellow'},  
        "2019-07-20":{type: 'disabled',color: 'blue'}, 
        "2019-07-21":{type: 'marked',color: 'green', disableTouch : false },
        "2019-07-31":{type: 'marked',color: 'yellow'},
        "2019-07-17": {type: 'dotted',color : 'transparent', disableTouch: false}
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  daysName:{
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop : 20
  },
  allDaysThisMonth:{
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop : 0,
    flexWrap : 'wrap',
    
  },
  cover:{
    marginHorizontal: 15,
  },

  textDisabled:{
    color: 'gray'
  },
  textWrapper:{
    justifyContent:'center',
    alignItems: 'center',
    width: (width-30) / 7,
    paddingVertical: 0,
    height: 50
  }
});
