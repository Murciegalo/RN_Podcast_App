import React, {useEffect,useState} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import * as Location from 'expo-location'


export default function App() {
  const [error, setError] = useState(null)
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
      alert(latitude , longitude)
    } 
    catch (error) {
      console.log(error)  
    }
  }
  return (
    <View style={styles.container}>
      <Text>TEST</Text>
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
