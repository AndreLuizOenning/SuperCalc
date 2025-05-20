import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Disp from './components/display/disp';
import Pad from './components/pad/pad';

export default function App() {

  const [number, setNumber] = useState(0);

  return (
    <PaperProvider theme={theme} >
      <View style={styles.container}>
          <Disp number={number}/>
          <Pad/>
      </View> 
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});

const theme = {
  ...DefaultTheme ,
    colors:{
      ...DefaultTheme.colors,
      primary: 'purple',
      secondary: 'white'
    },
    
}