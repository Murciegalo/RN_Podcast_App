import React from 'react'
import {Text , View, StyleSheet, Image} from 'react-native'
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
      <Text>{temp}</Text>
      <Text style={styles.descrp}>{description}</Text>
      <Text>{main}</Text>
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
  }
})
export default WeatherInfo
