import React, {useEffect,useState} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState(null)
  useEffect(() => load(), [])

  async function load(){
    try {
      let { status } = await Location.requestPermissionsAsync()
      if(status !== 'granted') {
        setError('Application need you location please')
        return;
      }
      const location = await Location.getCurrentPositionAsync()
      const { latitude , longitude } = location.coords

      const weather=`${Expo.Constants.manifest.extra.baseUrl}lat=${latitude}&lon=${longitude}&appid=${Expo.Constants.manifest.extra.apiKey}`
      const res = await fetch(weather)
      const result = await res.json()

      if(res.ok) {
        setWeather(result);
      }
      else {
        setError(result.message)
      }
    } 
    catch (error) {
      console.log(error)  
    }
  }

  if (weather) {
    const {
      main: { temp },
    } = weather;
    return (
      <View style={styles.container}>
        <Text>{temp}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
