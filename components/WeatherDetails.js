import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

export default function WeatherDetails({weather}) {
  const {
    main: {feels_like , humidity},
    wind: {speed}
  } = weather
  return (
    <View style={styles.main}>
      <View style={styles.row}>
        <View
          style={{
            ...styles.box,
            borderRightWidth: 1,
            borderRightColor: colors.BORDER_COLOR,
          }}
        >
          <View style={styles.row}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={colors.PRIMARY_COLOR}
            />
            <View>
              <Text>Feels like:</Text>
              <Text style={styles.text}> {feels_like}°</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={colors.PRIMARY_COLOR}
            />
            <View>
              <Text>Humidity:</Text>
              <Text style={styles.text}> {humidity}°</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 'auto',
    margin: 15,
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 10     
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  box: {
    flex:1 ,
    padding:20
  },
  text:{
    color: colors.SECONDARY_COLOR,
    fontWeight: 'bold'
  }
})