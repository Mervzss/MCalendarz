import React from 'react'
import {Text , View, StyleSheet, Dimensions, } from 'react-native'
import {width, height} from '../../Utils/valueUtils'

import {defaultDayName} from '../../Locale'

interface IProps{
  dayNames?: string[]
}

export default function DayNames(props : IProps){
  let x = 0;
  let val = [];

  do{
    val.push(
     <View key={x} style={styles.textWrapper}>
        <Text style={{color : "#AFAFAF"}}>
        {
          props.dayNames ? 
          props.dayNames[x] : 
          defaultDayName[x]
        }
        </Text>
    </View>  
    )
    x ++;
    
  }while(x < 7)
  return (<View style={{flexDirection:'row'}}>
      {val}
      </View>)
}

const styles = StyleSheet.create({
  textWrapper:{
    justifyContent:'center',
    alignItems: 'center',
    width: (width-30) / 7,
    paddingVertical: 0,
    height: 50
  }
})
