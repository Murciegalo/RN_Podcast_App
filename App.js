import React, {useEffect,useState} from 'react';
import { StyleSheet, View , Text, ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import { colors } from './utils';
import ReloadIcon from './components/ReloadIcon';

export default function App() {
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState(null)
  const [unitSystem, setUnitSystem] = useState('metric')

  useEffect(() => {
    async function load() {
      setWeather(null);
      setError(null);
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
          <ReloadIcon />
          <WeatherInfo weather={weather}/>
        </View>
      </View>
    );
  }
  else if(error){
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color={colors.PRIMARY_COLOR} />
        <StatusBar style='auto' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  main: {
    flex:1,
    justifyContent:'center'
  }
});
