import React, {useEffect,useState} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';

export default function App() {
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState(null)
  const [unitSystem, setUnitSystem] = useState('metric')

  useEffect(() => {
    async function load() {
      try {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setError("Application need you location please");
          return;
        }
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;

        const weather = `${Expo.Constants.manifest.extra.baseUrl}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${Expo.Constants.manifest.extra.apiKey}`;
        const res = await fetch(weather);
        const result = await res.json();

        if (res.ok) {
          setWeather(result);
        } else {
          setError(result.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    load()
  }
  ,[unitSystem])

  if (weather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker  unitSystem={unitSystem} setUnitSystem={setUnitSystem}/>
          <WeatherInfo weather={weather}/>
        </View>
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
  },
  main: {
    flex:1,
    justifyContent:'center'
  }
});
