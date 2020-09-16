import React from 'react'
import { View , StyleSheet, Platform } from 'react-native'
import {Picker} from 'react-native'

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
  return (
    <View style={styles.units}>
      <Picker
        selectedValue={unitSystem} 
        onValueChange={(item) => setUnitSystem(item)}
        mode="dropdown" //just android
        itemStyle={{fontSize:15}}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  units:{
    position: 'absolute',
    ...Platform.select({
      ios:{
        top: -20
      },
      android:{
        top: 30
      }
    }),
    left:20,
    height:50,
    width:100
  }
})