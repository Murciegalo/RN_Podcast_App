import React from 'react'
import {Text , View, StyleSheet, Image} from 'react-native'
import {colors} from '../utils/index'
const {PRIMARY_COLOR , SECONDARY_COLOR} = colors

function WeatherInfo({weather}) {
  const {
    main: { temp },
    weather: [details],
    name
  } = weather;
  const {icon, main, description} = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
    <View style={styles.card}>
      <Text>{name}</Text>
      <Image style={styles.icon} source={{ uri: iconUrl }} />
      <Text style={styles.primary}>{temp}°</Text>
      <Text style={styles.descrp}>{description}</Text>
      <Text style={styles.secondary}>{main}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card:{
    alignItems:'center'
  },
  icon:{
    width:100,
    height:100
  },
  descrp:{
    textTransform: 'capitalize'
  },
  primary:{
    fontSize:40,
    color: PRIMARY_COLOR,
  },
  secondary:{
    marginTop:10,
    fontSize:20,
    fontWeight: '500',
    color: SECONDARY_COLOR
  }

})
export default WeatherInfo
