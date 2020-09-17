import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

export default function WeatherDetails({weather, unitSystem}) {
  const {
    main: {feels_like, humidity, pressure},
    wind: {speed}
  } = weather

  const windSpeed =
    unitSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} ml/h`
    ;
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
              <Text style={styles.title}>Feels like:</Text>
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
              <Text style={styles.title}>Humidity:</Text>
              <Text style={styles.text}> {humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{...styles.row , borderTopWidth:1, borderColor:colors.BORDER_COLOR}}>
        <View
          style={{
            ...styles.box,
            borderRightWidth: 1,
            borderRightColor: colors.BORDER_COLOR,
          }}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={30}
              color={colors.PRIMARY_COLOR}
            />
            <View>
              <Text style={styles.title}>Winds Speed:</Text>
              <Text style={styles.text}> {windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={colors.PRIMARY_COLOR}
            />
            <View>
              <Text style={styles.title}>Pressure:</Text>
              <Text style={styles.text}> {pressure} hPa</Text>
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
  title: {
    fontSize: 12
  },
  text:{
    color: colors.SECONDARY_COLOR,
    fontWeight: 'bold'
  }
})